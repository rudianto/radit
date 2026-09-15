import pg from 'pg';
const { Client } = pg;

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres.bnsgmrtempzdskewnmeq:P@55w0rd.151092111@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres';

async function init() {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();
  console.log('Connected to Supabase PostgreSQL');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS wishes (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      attendance VARCHAR(50) NOT NULL DEFAULT 'Hadir',
      pax INTEGER NOT NULL DEFAULT 1,
      message TEXT NOT NULL,
      likes INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await client.query(createTableQuery);
  console.log('Table "wishes" verified/created.');

  const countRes = await client.query('SELECT COUNT(*) FROM wishes;');
  console.log('Existing count in wishes:', countRes.rows[0].count);

  if (parseInt(countRes.rows[0].count, 10) === 0) {
    console.log('Seeding initial wishes...');
    const seedQuery = `
      INSERT INTO wishes (name, attendance, pax, message, likes, created_at)
      VALUES 
      ('Keluarga Besar Opa Suryana', 'Hadir', 3, 'Selamat atas khitanan cucuku tersayang Raditya Rizky Mulyana! Semoga lekas sembuh, menjadi anak yang sholeh, cerdas, berbakti kepada orang tua, dan menjadi kebanggaan kita semua. Aamiin ya Rabbal Alamin.', 12, NOW() - INTERVAL '1 hour'),
      ('Om Dimas & Tante Cindy', 'Hadir', 2, 'Barakallahu fii umrik Raditya jagoan cilik! Hebat sekali sudah berani dikhitan. Semoga tumbuh menjadi pangeran pemberani yang berakhlak mulia. InsyaAllah kami hadir di Bandung!', 8, NOW() - INTERVAL '3 hours'),
      ('Ust. H. Fauzan & Santri', 'Hadir', 2, 'Alhamdulillah wasysyukrulillah. Semoga Ananda Raditya diberkahi Allah SWT, dijadikan generasi qurani yang tangguh dan selamat dunia akhirat.', 15, NOW() - INTERVAL '5 hours'),
      ('Tante Maya Sekeluarga', 'Hadir', 4, 'Selamat ya Mas Mulyana dan Mbak Ratna atas tasyakuran khitanan Raditya. Doa terbaik dari kami sekeluarga dari Jakarta. Semoga lancar berkah acaranya!', 6, NOW() - INTERVAL '1 day');
    `;
    await client.query(seedQuery);
    console.log('Seeded initial wishes successfully!');
  }

  const sample = await client.query('SELECT id, name, attendance, pax, likes, created_at FROM wishes ORDER BY created_at DESC LIMIT 5;');
  console.log('Sample rows:', sample.rows);

  await client.end();
}

init().catch(err => {
  console.error('Error initializing database:', err);
  process.exit(1);
});
