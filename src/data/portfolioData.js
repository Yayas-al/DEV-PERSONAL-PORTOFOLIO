// ─── STEP STRUCTURE ──────────────────────────────────────────────────────────
// tag options: "Impact" | "Business" | "Overview" | "Analysis" | "Visual" | "Technical"
// min 3, max 6 steps per project
// urutan: insight dulu (non-tech) → rekomendasi → data overview → EDA → visual → teknis
// ─────────────────────────────────────────────────────────────────────────────

export const portfolioData = [
  // ─── PROJECT 1: Marketing Performance ───────────────────────────────────────
  {
    id: "marketing-performance-dashboard",
    title: "Multi-Channel Marketing Performance Tracker",
    stat: "New • Marketing Analytics",
    accentBg: "bg-primary",
    mockupBg: "bg-primary/20",
    desc: "Built a unified marketing attribution dashboard that revealed a 38% budget reallocation opportunity by tracking ROAS across 8 paid channels and correlating ad spend with actual conversion events.",
    heroDesc:
      "Most marketing teams fly blind — spending millions across channels without knowing what truly converts. We connected 8 fragmented ad platforms into one unified attribution model. The result? A $640K annual budget savings by cutting underperforming campaigns and doubling down on what actually drives revenue.",
    tags: ["Python", "dbt", "Looker", "Google Ads API", "Meta API"],
    metrics: [
      { value: "38%", label: "Budget Reallocated" },
      { value: "$640K", label: "Annual Savings" },
      { value: "8", label: "Channels Unified" },
      { value: "4.2x", label: "Avg ROAS Achieved" },
    ],
    steps: [
      {
        tag: "Insight",
        title: "Key Findings",
        desc: "Setelah 3 minggu deep-dive ke data, ditemukan bahwa 61% dari total ad spend selama 12 bulan terakhir mengalir ke channel dengan ROAS di bawah 1.8x — artinya perusahaan rugi setiap kali mereka beriklan di sana. Yang lebih mengejutkan: TikTok Ads yang selama ini dianggap 'eksperimen kecil' dengan budget hanya 8% dari total, ternyata menghasilkan ROAS 6.1x — tertinggi dari semua channel. Google Search masih solid di 3.2x, tapi display network-nya cuma 0.9x. Meta performance sangat fluktuatif: kuat di retargeting (4.8x) tapi lemah di cold audience (1.1x). Temuan lain: ada lag antara klik iklan dan konversi aktual rata-rata 11 hari — ini yang membuat model last-click sebelumnya sangat menyesatkan.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Berdasarkan temuan di atas, ada tiga aksi prioritas yang direkomendasikan. Pertama, realokasikan 38% budget dari Google Display dan Meta cold audience ke TikTok Ads dan YouTube mid-funnel — ini saja diestimasi menghasilkan efisiensi $640K per tahun tanpa tambahan budget. Kedua, pisahkan strategi Meta menjadi dua bucket terpisah: retargeting (pertahankan) dan prospecting (ganti dengan TikTok atau Pinterest). Ketiga, implementasikan automated budget rules di Google Ads Manager — jika ROAS campaign turun di bawah 1.5x selama 7 hari berturut-turut, budget dipotong otomatis 50% sambil mengirim alert ke tim marketing. Ketiga aksi ini bisa dieksekusi dalam 2 sprint pertama tanpa perlu perubahan infrastruktur besar.",
      },
      {
        tag: "Overview",
        title: "Data Overview",
        desc: "Dataset yang digunakan mencakup 18 bulan data dari 8 platform iklan berbeda — Google Ads, Meta Ads, TikTok Ads, YouTube, Twitter/X, LinkedIn, Programmatic (DV360), dan Pinterest. Data spend dan impression ditarik via API masing-masing platform, lalu digabungkan dengan data konversi dari GA4 (4.3 juta events) dan CRM internal (Salesforce). Total ada 11 tabel berbeda yang harus diharmonisasi karena setiap platform punya definisi 'konversi' yang berbeda-beda — ini yang jadi tantangan utama di awal proyek. Periode data: Januari 2023 – Juni 2024.",
      },
      {
        tag: "Analysis",
        title: "Attribution Modeling & Channel Analysis",
        desc: "Langkah pertama adalah membuang model last-click yang selama ini dipakai dan menggantinya dengan data-driven attribution menggunakan Shapley Value — ini membagi kredit konversi secara proporsional ke setiap touchpoint dalam customer journey. Hasilnya sangat berbeda: under model lama, Google Search mendapat 78% kredit konversi. Dengan Shapley, turun jadi 41%, dan TikTok naik dari 3% ke 19%. Selain itu, ditemukan pola seasonal yang kuat — ROAS social media naik rata-rata 2.3x di Q4 (Oktober–Desember) dan drop tajam di Januari. Ini menunjukkan bahwa budget allocation harus dinamis mengikuti seasonality, bukan flat sepanjang tahun.",
      },
      {
        tag: "Technical",
        title: "Technical Pipeline",
        desc: "Pipeline dibangun dengan pendekatan ELT. Data dari 8 platform ditarik menggunakan Python (library: google-ads, facebook-business, TikTok Marketing API) dengan scheduling via Apache Airflow yang jalan di GCP. Raw data di-landing ke BigQuery, lalu ditransformasi menggunakan dbt dengan 34 model yang sudah ter-documented dan di-test (>95% coverage). Untuk attribution modeling, digunakan custom Python script berbasis Shapley Value yang dijalankan sebagai dbt Python model. Output akhir masuk ke Looker sebagai semantic layer, dengan dashboard yang refresh otomatis setiap 4 jam. Total waktu development: 6 minggu dengan tim 2 orang.",
      },
      {
        tag: "Dashboard",
        title: "Marketing Performance Dashboard Preview",
        media: {
          type: "image",
          url: "/dahboard.webp",
        },
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  // ─── PROJECT 2: Employee Sentiment ───────────────────────────────────────────
  {
    id: "employee-sentiment-analysis",
    title: "Employee Sentiment & Retention Risk Analysis",
    stat: "New • People Analytics",
    accentBg: "bg-secondary",
    mockupBg: "bg-secondary/20",
    desc: "Developed an NLP-powered sentiment engine that processed 14,000+ open-ended survey responses to predict employee churn 3 months in advance, helping HR reduce voluntary attrition by 31%.",
    heroDesc:
      "Losing a good employee costs up to 200% of their annual salary — yet most companies only find out someone is unhappy when they've already resigned. We built an early-warning system using NLP on 14,000+ anonymous survey responses. By detecting subtle sentiment shifts in free-text answers, HR teams could intervene proactively — reducing voluntary attrition by 31% within one year.",
    tags: ["Python", "HuggingFace", "spaCy", "Power BI", "Azure ML"],
    metrics: [
      { value: "31%", label: "Attrition Reduced" },
      { value: "14K+", label: "Responses Analyzed" },
      { value: "87%", label: "Churn Prediction Accuracy" },
      { value: "3 Mo", label: "Early Warning Lead Time" },
    ],
    steps: [
      {
        tag: "Insight",
        title: "Key Findings",
        desc: "Temuan paling mengejutkan dari proyek ini: karyawan yang resign rata-rata sudah menunjukkan sinyal negatif dalam teks survei mereka 3–6 bulan sebelum akhirnya keluar. Kata dan frasa seperti 'tidak ada ruang berkembang', 'merasa tidak didengar', dan 'manajemen tidak konsisten' muncul dengan frekuensi 4.7x lebih tinggi pada karyawan yang kemudian resign dibanding yang bertahan. Secara departemen, Engineering dan Sales mencatatkan sentiment score terendah selama 2 kuartal berturut-turut — dan benar, kedua departemen ini juga punya attrition rate tertinggi (23% dan 19%). Yang menarik: faktor kompensasi bukan yang paling sering disebut. 'Work-life balance' dan 'hubungan dengan atasan langsung' justru mendominasi sebagai root cause.",
      },
      {
        tag: "Overview",
        title: "Data Overview",
        desc: "Data yang digunakan bersumber dari tiga kanal utama: (1) Annual engagement survey — diisi oleh 2.400 karyawan aktif, berisi 6 pertanyaan terbuka dan 20 pertanyaan skala Likert. (2) Quarterly pulse survey — sampling 30% karyawan per kuartal, lebih pendek tapi lebih sering. (3) Exit interview records — 340 record dari karyawan yang sudah resign dalam 3 tahun terakhir, ini jadi ground truth untuk training model. Selain itu, data pendukung dari HR system mencakup: histori promosi, data absensi, skor performa review, lama kerja, dan departemen. Total: 14.200+ jawaban teks yang harus diproses, dengan campuran Bahasa Indonesia, Inggris, dan code-switching.",
      },
      {
        tag: "Analysis",
        title: "NLP Processing & Sentiment Modeling",
        desc: "Tantangan utama adalah teks yang campur Bahasa Indonesia dan Inggris dengan banyak slang informal khas workplace ('resign aja deh', 'udah capek ngomong'). Solusinya: fine-tuning IndoBERT (base model dari Hugging Face) menggunakan 1.200 labeled samples dari exit interview yang sudah dianotasi manual oleh tim HR. Model akhir mencapai F1-score 0.84 untuk klasifikasi sentimen 3 kelas (positif/netral/negatif). Di atas sentiment classification, dijalankan LDA topic modeling untuk mengidentifikasi tema-tema keluhan utama — hasilnya 9 topik dominan, dipimpin 'work-life balance' (28%), 'relasi dengan manajer' (22%), dan 'kejelasan karir' (17%). Semua output ini kemudian digabung dengan data HR untuk membangun churn risk score per karyawan menggunakan XGBoost.",
      },
      {
        tag: "Technical",
        title: "Technical Pipeline & Deployment",
        desc: "Infrastruktur dibangun di atas Azure: data survei masuk via Azure Data Factory, preprocessing dan inference model berjalan di Azure ML Compute. Model IndoBERT di-serve sebagai REST endpoint yang bisa dipanggil setiap kali batch survei baru masuk. Untuk privacy, seluruh identitas karyawan di-anonymize sebelum masuk ke pipeline ML — HR hanya menerima output berupa 'risk tier' (High/Medium/Low) tanpa bisa trace balik ke nama individu. Dashboard Power BI di-setup dengan Row-Level Security: HR Business Partner hanya bisa melihat data departemen yang menjadi tanggung jawabnya. Re-training model dilakukan setiap 6 bulan menggunakan data exit interview terbaru sebagai label baru.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Ada empat rekomendasi utama yang langsung dieksekusi oleh tim HR pasca proyek ini selesai. Pertama, ganti annual survey dengan pulse survey bulanan — data lebih fresh dan sinyal bisa ditangkap lebih cepat. Kedua, buat SOP intervensi berbasis risk tier: karyawan dengan High Risk wajib mendapat 1-on-1 dengan HR dalam 2 minggu, Medium Risk masuk ke program mentoring, Low Risk cukup dipantau via dashboard. Ketiga, training wajib untuk semua manager level tentang hasil topic modeling — khususnya 2 tema teratas yang paling sering jadi pemicu resign. Keempat, redesign career path framework untuk Engineering dan Sales yang selama ini paling ambigu dan paling sering dikeluhkan. Dalam 12 bulan setelah implementasi, voluntary attrition turun dari 21% ke 14.5%.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  // ─── PROJECT 3: Supermarket Sales ────────────────────────────────────────────
  {
    id: "supermarket-sales-intelligence",
    title: "Supermarket Sales Intelligence & Demand Forecasting",
    stat: "New • Retail Analytics",
    accentBg: "bg-highlight",
    mockupBg: "bg-highlight/20",
    desc: "Engineered a demand forecasting and shelf optimization system across 42 store branches that cut stockout incidents by 44% and reduced overstock waste by $870K annually.",
    heroDesc:
      "Empty shelves lose customers. Overstocked shelves waste money. We built a demand forecasting engine for a regional supermarket chain covering 42 branches and 8,000+ SKUs. By combining historical sales, local events, and weather data, the system predicts daily demand per product per store — eliminating $870K in annual overstock losses and cutting stockout incidents by 44%.",
    tags: ["Python", "Prophet", "Apache Airflow", "PostgreSQL", "Metabase"],
    metrics: [
      { value: "44%", label: "Stockouts Reduced" },
      { value: "$870K", label: "Waste Eliminated" },
      { value: "8K+", label: "SKUs Forecasted" },
      { value: "42", label: "Branches Covered" },
    ],
    steps: [
      {
        tag: "Overview",
        title: "Data Overview & Scoping",
        desc: "Proyek ini dimulai dengan scoping session bersama tim operasional dan purchasing untuk memahami pain point nyata di lapangan. Ditemukan bahwa masalah stockout dan overstock sudah berlangsung 2+ tahun tapi belum pernah dikuantifikasi secara serius. Dataset yang dikumpulkan: 3 tahun transaksi POS harian dari 42 cabang (180 juta+ rows), data stok gudang dan purchase order, histori promosi dan diskon, plus eksternal data — cuaca harian per kota (BMKG API), kalender hari libur nasional, dan event lokal yang dikurasi manual (pameran, konser, bazar) per area cabang. Tantangan awal: kualitas data POS sangat bervariasi antar cabang — 7 cabang lama masih pakai sistem legacy yang outputnya CSV manual, sementara 35 cabang newer sudah terintegrasi ke sistem pusat.",
      },
      {
        tag: "Analysis",
        title: "EDA & Pattern Discovery",
        desc: "Sebelum masuk ke modeling, dilakukan EDA intensif selama 2 minggu untuk memahami karakter data. Beberapa temuan kritis: (1) 73% dari total stockout incidents terkonsentrasi hanya di 200 SKU fast-moving — artinya prioritas harus di sini dulu, bukan semua 8.000+ SKU sekaligus. (2) Ada pola demand yang sangat kuat di tanggal 25–1 setiap bulan (efek gajian) — demand naik rata-rata 2.8x dari hari normal, tapi sistem order lama sama sekali tidak mengakomodasi ini. (3) Cabang suburban punya weekend spike 2.4x lebih tinggi dibanding cabang perkotaan yang lebih flat. (4) Kategori 'snack & minuman' punya shelf life pendek tapi diorder dalam batch besar — ini penyumbang terbesar waste senilai $870K. Semua temuan ini jadi dasar desain model forecasting.",
      },
      {
        tag: "Technical",
        title: "Forecasting Pipeline & Engineering",
        desc: "Model forecasting dibangun menggunakan Facebook Prophet dengan beberapa customisasi penting: ditambahkan custom seasonality untuk pola gajian bulanan, hari raya Islam (karena mayoritas cabang di area dengan populasi Muslim dominan), dan event lokal per kota. Untuk masing-masing SKU di masing-masing cabang, dilatih model tersendiri — total ada 336.000+ model Prophet yang dikelola. Karena tidak mungkin retrain semua setiap hari, dibuat tiering: Top 200 SKU per cabang diretrain harian, sisanya mingguan atau bulanan tergantung velocity. Semua ini diorkestrasikan dengan Apache Airflow yang jalan di on-premise server (bukan cloud, sesuai constraint budget klien). Output forecast per SKU per cabang per hari disimpan di PostgreSQL dan bisa diakses store manager lewat Metabase dashboard.",
      },
      {
        tag: "Insight",
        title: "Key Findings",
        desc: "Setelah sistem berjalan 3 bulan, dilakukan evaluasi menyeluruh. MAPE (Mean Absolute Percentage Error) rata-rata model untuk Top 200 SKU ada di angka 11.3% — jauh lebih baik dari 'gut feeling' purchasing team yang errornya bisa 35–50%. Stockout incidents turun 44% dibanding periode yang sama tahun lalu. Yang menarik: bukan berarti model sempurna — ada 3 kategori yang modelnya masih struggling: produk yang baru dilaunching (cold start problem), SKU dengan demand sangat sporadic (jual 0–1 per hari), dan produk yang sangat sensitif terhadap viral trend media sosial yang tidak bisa diprediksi dari data historis. Ketiga kategori ini diberi flag khusus di dashboard sebagai 'manual review required' supaya purchasing team tetap punya kontrol.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Tiga rekomendasi utama untuk fase lanjutan proyek ini. Pertama, implementasi auto-replenishment untuk Top 200 SKU — sistem langsung generate purchase order draft ke supplier tanpa intervensi manual, purchasing hanya perlu approve. Ini bisa menghemat 4–5 jam kerja manual per hari di setiap cabang. Kedua, integrasikan data promosi yang direncanakan ke dalam model — saat ini tim marketing tidak selalu memberi tahu tim data soal promo mendatang, padahal ini sangat mempengaruhi akurasi forecast. Perlu dibuat SOP data sharing lintas departemen. Ketiga, untuk kategori waste tinggi (snack & minuman), rekomendasikan markdown pricing otomatis 3 hari sebelum expiry date — estimasi bisa recover 15–20% dari nilai produk yang sebelumnya dibuang begitu saja.",
      },
      {
        tag: "Dashboard",
        title: "Sales Intelligence Dashboard Preview",
        media: {
          type: "iframe",
          url: "https://public.tableau.com/views/Superstore_24/Overview?:showVizHome=no&:embed=true",
        },
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },// ─── PROJECT 4: Finance / Fraud Detection ────────────────────────────────────
  {
    id: "fraud-detection-engine",
    title: "Real-Time Payment Fraud Detection Engine",
    stat: "New • Financial Intelligence",
    accentBg: "bg-red-400",
    mockupBg: "bg-red-400/20",
    desc: "Built a real-time ML fraud detection system processing 2.3M daily transactions with 94.7% precision, reducing fraudulent losses by $3.1M annually while cutting false positive rate by 67%.",
    heroDesc:
      "Every second of delay in detecting fraud costs real money. We engineered a real-time scoring engine that evaluates every incoming transaction in under 80ms — flagging anomalies before they clear. By replacing the old rule-based system with an ensemble ML model, fraud losses dropped by $3.1M in the first year while the team stopped drowning in false positive alerts.",
    tags: ["Python", "XGBoost", "Kafka", "Redis", "PostgreSQL", "Grafana"],
    metrics: [
      { value: "$3.1M", label: "Fraud Prevented" },
      { value: "94.7%", label: "Precision" },
      { value: "-67%", label: "False Positives" },
      { value: "<80ms", label: "Detection Latency" },
    ],
    steps: [
      {
        tag: "Overview",
        title: "Problem Scoping & Data Overview",
        desc: "Titik awal proyek ini bukan dari tim data — tapi dari complaint internal: tim fraud analyst kewalahan karena sistem rule-based lama menghasilkan 1.200+ alert per hari, dan 89% di antaranya ternyata bukan fraud (false positives). Akibatnya, banyak kasus fraud nyata yang terlambat ditangani karena analis kelelahan menyortir noise. Dataset yang digunakan mencakup 14 bulan histori transaksi — 2.3 juta transaksi per hari dari 3 channel: mobile banking, internet banking, dan EDC merchant. Setiap transaksi memiliki 47 raw features: nominal, lokasi, device fingerprint, waktu, frekuensi, dan histori perilaku user. Label fraud tersedia dari dispute records dan hasil investigasi manual tim, dengan rasio imbalance ekstrem: hanya 0.03% transaksi adalah fraud nyata.",
      },
      {
        tag: "Analysis",
        title: "Feature Engineering & Pattern Analysis",
        desc: "Dengan imbalance data separah itu, model naif akan asal prediksi 'not fraud' untuk semua transaksi dan tetap dapat akurasi 99.97% — tapi tidak berguna sama sekali. Fokus utama di tahap ini adalah membangun features yang benar-benar diskriminatif. Beberapa feature engineering yang paling impactful: (1) velocity features — berapa kali user melakukan transaksi dalam 1, 5, dan 15 menit terakhir; (2) geographic anomaly — jarak antara lokasi transaksi saat ini vs lokasi transaksi terakhir dibagi selisih waktu, untuk mendeteksi 'impossible travel'; (3) device trust score — apakah device yang dipakai pernah dipakai sebelumnya dan sudah berapa lama; (4) amount deviation — seberapa jauh nominal transaksi dari rata-rata historis user tersebut. EDA juga mengungkap pola: 71% fraud terjadi antara pukul 01.00–04.00 dini hari, dan 84% melibatkan device baru yang belum pernah dipakai sebelumnya.",
      },
      {
        tag: "Technical",
        title: "Model Development & Real-Time Pipeline",
        desc: "Model akhir adalah stacking ensemble: XGBoost sebagai base learner utama (karena performa terbaik di tabular imbalanced data), dikombinasikan dengan Isolation Forest untuk menangkap anomali pola baru yang belum ada di training data. Untuk menangani imbalance, digunakan kombinasi SMOTE + cost-sensitive learning dengan penalty asimetris — false negative (fraud lolos) dihukum 10x lebih berat dari false positive. Untuk real-time serving, setiap transaksi masuk via Kafka stream, di-enrich dengan feature dari Redis (histori user yang di-cache), lalu di-score oleh model yang di-serve sebagai FastAPI endpoint. Hasilnya tersimpan di PostgreSQL dan di-monitor via Grafana dashboard. Threshold scoring dibuat 3-tier: auto-approve, auto-block, dan 'challenge' (kirim OTP tambahan). Re-training model dijadwalkan tiap 2 minggu menggunakan data fraud label terbaru.",
      },
      {
        tag: "Insight",
        title: "Key Findings",
        desc: "Setelah 3 bulan live, performa model jauh melampaui ekspektasi awal. Precision mencapai 94.7% (dari target 85%) dan recall di 81.3% — artinya model berhasil menangkap 4 dari 5 fraud nyata dengan hampir tidak ada noise. False positive rate turun 67%, sehingga tim analyst yang tadinya tenggelam dalam 1.200 alert/hari kini hanya perlu review 390 alert/hari yang jauh lebih berkualitas. Fraud losses yang berhasil dicegah di tahun pertama: $3.1M. Yang perlu diwaspadai: model mulai degradasi saat modus fraud berubah — ada periode di bulan ke-4 ketika akurasi drop karena pelaku mulai menggunakan SIM card baru setiap transaksi untuk mengakali device fingerprint. Ini yang kemudian mendorong penambahan fitur SIM card velocity di iterasi berikutnya.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Tiga rekomendasi utama untuk memperkuat sistem ke depan. Pertama, implementasi behavioral biometrics — cara user mengetik, menekan layar, dan memegang handphone bisa jadi sinyal tambahan yang sangat sulit dipalsukan, dan beberapa vendor sudah menyediakan SDK-nya. Kedua, bangun feedback loop yang lebih cepat: saat ini label fraud baru tersedia 3–5 hari setelah investigasi selesai — idealnya ada fast-track labeling untuk kasus high-confidence supaya model bisa update lebih cepat. Ketiga, pertimbangkan Graph Neural Network untuk iterasi model berikutnya — pola fraud sering berbentuk jaringan (satu device dipakai banyak akun, satu nomor HP terdaftar ke banyak identitas), dan GNN jauh lebih baik dalam mendeteksi pola relasi seperti ini dibanding model tabular.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  // ─── PROJECT 5: Healthcare / Patient Analytics ────────────────────────────────
  {
    id: "patient-readmission-analytics",
    title: "Hospital Readmission Risk & Patient Flow Analytics",
    stat: "New • Healthcare Analytics",
    accentBg: "bg-teal-400",
    mockupBg: "bg-teal-400/20",
    desc: "Developed a patient readmission prediction model and bed utilization dashboard across 6 hospital units, reducing 30-day readmission rate by 26% and cutting average patient waiting time by 38 minutes.",
    heroDesc:
      "In healthcare, a preventable readmission isn't just a cost problem — it's a patient safety issue. Working with a regional hospital network, we built a risk scoring system that flags high-risk patients before discharge. Paired with a real-time bed flow dashboard, the clinical team could act early — driving a 26% drop in 30-day readmissions and reclaiming 38 minutes of average waiting time per patient.",
    tags: ["Python", "Scikit-learn", "SQL Server", "Power BI", "FHIR API"],
    metrics: [
      { value: "-26%", label: "Readmission Rate" },
      { value: "-38 Min", label: "Waiting Time" },
      { value: "6", label: "Units Covered" },
      { value: "91%", label: "Risk Score AUC" },
    ],
    steps: [
      {
        tag: "Overview",
        title: "Data Overview & Compliance Scoping",
        desc: "Proyek healthcare selalu punya lapisan kompleksitas tambahan yang tidak ada di industri lain: regulasi privasi data pasien. Sebelum satu baris kode pun ditulis, 3 minggu pertama dihabiskan untuk data governance review bersama tim IT rumah sakit, legal, dan komite etik. Semua data diakses dalam lingkungan on-premise yang terisolasi (tidak ada data keluar ke cloud), dan seluruh identitas pasien di-pseudonymize dengan enkripsi AES-256. Dataset yang digunakan: rekam medis elektronik (EMR) dari 6 unit — IGD, Penyakit Dalam, Jantung, Bedah, Ortopedi, dan Saraf — mencakup 87.000 episode rawat inap dalam 3 tahun terakhir. Features yang tersedia: diagnosis (ICD-10 codes), prosedur, lama rawat, jumlah readmisi sebelumnya, hasil lab, obat-obatan, dan data demografis.",
      },
      {
        tag: "Analysis",
        title: "EDA & Risk Factor Identification",
        desc: "EDA dilakukan dengan pendekatan klinis-statistik — setiap temuan didiskusikan dengan dokter spesialis sebelum dikonfirmasi sebagai insight yang valid. Beberapa temuan penting: (1) Pasien dengan 2+ readmisi dalam 12 bulan terakhir punya probabilitas readmisi berikutnya 3.8x lebih tinggi dari pasien baru — ini jadi feature paling predictive. (2) Lama rawat inap yang sangat pendek (kurang dari 2 hari) paradoksnya berkorelasi positif dengan readmisi — indikasi discharge yang terlalu dini. (3) Pasien yang pulang di hari Jumat punya readmisi rate 18% lebih tinggi karena keterbatasan akses follow-up di akhir pekan. (4) Kombinasi diagnosis diabetes + gagal ginjal kronis adalah pasangan komorbiditas dengan readmisi rate tertinggi: 41% dalam 30 hari. Semua ini menjadi dasar feature engineering dan komunikasi ke tim klinisi.",
      },
      {
        tag: "Technical",
        title: "Model Development & Integration",
        desc: "Model readmission risk dibangun menggunakan Gradient Boosting (LightGBM) dengan cross-validation stratified 5-fold untuk menjaga distribusi kelas. Feature importance diinterpretasikan menggunakan SHAP values — ini krusial untuk penerimaan dokter, karena mereka perlu tahu MENGAPA seorang pasien di-flag berisiko tinggi, bukan hanya skornya saja. Output model berupa risk score 0–100 yang dikategorikan menjadi tiga tier: Low (<40), Medium (40–70), High (>70). Skor ini di-embed langsung ke dalam sistem EMR yang sudah ada menggunakan FHIR API, sehingga muncul otomatis di dashboard perawat saat proses discharge planning. Untuk analisis patient flow dan bed utilization, dibangun dashboard Power BI terpisah yang terhubung ke data operasional real-time — menampilkan occupancy rate per unit, prediksi discharge dalam 24 jam ke depan, dan bottleneck di IGD.",
      },
      {
        tag: "Insight",
        title: "Key Findings",
        desc: "Model mencapai AUC 0.91 di test set — jauh di atas benchmark LACE Index (AUC 0.64) yang selama ini dipakai manual oleh tim medis. Dalam 6 bulan pertama deployment, readmission rate 30 hari turun dari 14.2% ke 10.5% — penurunan 26% yang secara statistik signifikan. Efek paling besar terasa di unit Penyakit Dalam dan Jantung, yang memang punya volume pasien high-risk tertinggi. Di sisi operasional, dashboard patient flow membantu mengidentifikasi bahwa bottleneck utama bukan di ruang rawat inap, tapi di proses administrasi discharge — rata-rata memakan 2.3 jam yang sebagian besar bisa dipotong dengan digitalisasi checklist. Hasilnya: waiting time turun 38 menit per pasien dan bed turnover naik 12%.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Empat rekomendasi untuk fase lanjutan. Pertama, buat protokol intervensi terstandar per risk tier — saat ini dokter tahu siapa yang high-risk tapi belum ada SOP jelas harus melakukan apa. Tanpa ini, skor risiko hanya jadi angka yang dilihat lalu diabaikan. Kedua, perluas model ke prediksi Length of Stay (LOS) — ini akan membantu perencanaan kapasitas bed jauh lebih akurat. Ketiga, integrasikan data post-discharge: apakah pasien mengambil obat tepat waktu? Apakah datang ke jadwal kontrol? Data ini saat ini tidak terhubung ke EMR padahal sangat prediktif untuk readmisi. Keempat, pertimbangkan model khusus per unit karena karakteristik pasien jantung dan pasien bedah sangat berbeda — satu model generik mungkin tidak optimal untuk semua unit.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  // ─── PROJECT 6: Social Media Analytics ───────────────────────────────────────
  {
    id: "social-media-intelligence",
    title: "Brand Social Media Intelligence & Crisis Detection",
    stat: "New • Social Analytics",
    accentBg: "bg-violet-400",
    mockupBg: "bg-violet-400/20",
    desc: "Built a real-time social listening and brand sentiment platform that monitors 500K+ daily mentions across 4 platforms, detecting a potential PR crisis 6 hours before it went viral — giving the comms team critical response time.",
    heroDesc:
      "A brand crisis that's caught early is a crisis that can be managed. We built an always-on social intelligence system that ingests half a million daily mentions across Twitter/X, Instagram, TikTok, and news sites — applying NLP to classify sentiment, detect emerging narratives, and trigger automated alerts the moment an anomaly is detected. When a product defect started trending, the system flagged it 6 hours before mainstream media picked it up.",
    tags: ["Python", "Kafka", "Elasticsearch", "Kibana", "HuggingFace", "Airflow"],
    metrics: [
      { value: "500K+", label: "Daily Mentions" },
      { value: "6 Hrs", label: "Crisis Lead Time" },
      { value: "4", label: "Platforms Monitored" },
      { value: "89%", label: "Sentiment Accuracy" },
    ],
    steps: [
      {
        tag: "Overview",
        title: "Data Sources & Ingestion Architecture",
        desc: "Platform yang dimonitor mencakup empat kanal utama: Twitter/X (via Academic API), Instagram (via Graph API — terbatas pada mention publik dan hashtag), TikTok (via Research API untuk konten publik), dan agregasi berita online menggunakan custom web scraper berbasis RSS feed dari 340 media nasional dan regional. Setiap kanal punya karakteristik berbeda: Twitter bergerak paling cepat dan jadi leading indicator krisis, TikTok paling viral tapi paling susah diinterpretasi karena banyak konten berbentuk video dengan teks minimal, Instagram lebih lambat tapi relevan untuk brand image, dan berita online biasanya jadi konfirmasi bahwa sebuah isu sudah meledak. Total volume rata-rata: 500.000–700.000 mention per hari tergantung ada tidaknya campaign aktif. Semua data masuk ke pipeline real-time via Kafka dengan retensi 30 hari di Elasticsearch.",
      },
      {
        tag: "Analysis",
        title: "Sentiment Classification & Narrative Detection",
        desc: "Tantangan terbesar di proyek ini adalah volume dan keberagaman bahasa: campuran Indonesia formal, informal, slang Twitter ('goks', 'anjir', 'mantul'), sarkasme, dan kadang Jawa atau Sunda. Model pre-trained generik performanya buruk di konteks ini. Solusinya: fine-tuning IndoBERT menggunakan 8.000 sampel yang dilabeli manual — campuran mention brand nyata dari berbagai kategori sentimen. Hasilnya F1-score 0.89 untuk 3-class classification. Di atas sentiment, dibangun narrative clustering menggunakan BERTopic untuk mengelompokkan mention berdasarkan topik yang sedang dibicarakan — bukan hanya 'positif/negatif', tapi juga TENTANG APA. Ini yang membuat sistem bisa membedakan: apakah volume negatif yang naik itu tentang harga, kualitas produk, pelayanan, atau pengiriman? Masing-masing butuh respons yang berbeda dari tim komunikasi.",
      },
      {
        tag: "Technical",
        title: "Real-Time Pipeline & Alerting System",
        desc: "Arsitektur sistem terdiri dari tiga layer. Layer ingestion: data dari setiap platform dikumpulkan oleh producer terpisah yang berjalan di Docker container, dikirim ke topik Kafka masing-masing dengan throughput rata-rata 400 pesan/detik di peak hour. Layer processing: consumer Kafka menjalankan preprocessing (cleaning, language detection, deduplication) lalu memanggil inference endpoint model sentiment dan topic. Layer storage & alerting: hasil masuk ke Elasticsearch (untuk search dan aggregation) dan PostgreSQL (untuk laporan historis). Dashboard monitoring dibangun di Kibana dengan real-time update. Untuk alerting, diimplementasikan anomaly detection sederhana berbasis z-score: jika volume mention negatif tentang topik tertentu naik lebih dari 2.5 standar deviasi dari baseline 7 hari terakhir dalam window 15 menit, sistem otomatis kirim alert ke Slack channel tim komunikasi beserta sampel tweet penyebabnya.",
      },
      {
        tag: "Insight",
        title: "Key Findings & Crisis Case Study",
        desc: "Momen paling membuktikan nilai sistem ini terjadi di bulan ke-4 operasional. Pukul 14.23, sistem mendeteksi lonjakan mention negatif tentang topik 'produk rusak' dan 'batch tertentu' yang naik 340% dalam 20 menit — jauh di atas threshold alert. Tim komunikasi langsung mendapat notifikasi dengan ringkasan: 'Volume tinggi, sentimen negatif, topik: cacat produk, sumber awal: 3 akun dengan 50K+ followers di Twitter'. Enam jam kemudian, berita itu masuk ke portal berita nasional besar. Karena ada 6 jam untuk bersiap, tim PR sudah punya draft statement resmi, sudah koordinasi dengan tim legal dan produksi, dan sudah tahu persis batch mana yang bermasalah — bukan dari sistem internal, tapi dari mention publik yang sistem kami tangkap lebih cepat dari laporan internal. Crisis berhasil dikelola tanpa eskalasi lebih lanjut.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Tiga area pengembangan yang direkomendasikan. Pertama, tambahkan video content analysis untuk TikTok — saat ini hanya teks caption dan komentar yang dianalisis, padahal konten videonya bisa jauh lebih viral dan lebih susah dideteksi. Beberapa vendor sudah menyediakan multimodal API untuk ini. Kedua, bangun competitor benchmarking layer — monitor sentimen brand kompetitor dengan metodologi yang sama sehingga tim bisa tahu apakah sentimen negatif yang naik itu spesifik ke brand sendiri atau merupakan tren industri. Ketiga, integrasikan data sosial ini dengan data sales harian untuk mengukur korelasi antara sentiment score dan penjualan aktual — ini akan membantu membuktikan ROI dari investasi sosial media kepada stakeholder C-level yang masih skeptis.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  // ─── PROJECT 7: Customer Segmentation / RFM ──────────────────────────────────
  {
    id: "customer-segmentation-rfm",
    title: "Customer Segmentation & RFM-Based Loyalty Engine",
    stat: "New • CRM Analytics",
    accentBg: "bg-amber-400",
    mockupBg: "bg-amber-400/20",
    desc: "Designed a behavioral customer segmentation system combining RFM scoring and K-Means clustering on 1.8M customer profiles, enabling personalized campaigns that lifted retention revenue by 29% in 4 months.",
    heroDesc:
      "Not all customers are equal — and treating them the same way is leaving money on the table. We analyzed 1.8 million customer profiles using RFM scoring and unsupervised clustering to uncover 7 distinct behavioral segments. Each segment got a tailored engagement strategy. Four months later, retention-driven revenue climbed 29% while CRM campaign costs dropped because the team stopped blasting irrelevant offers to the wrong people.",
    tags: ["Python", "Scikit-learn", "SQL", "Tableau", "Segment", "Braze"],
    metrics: [
      { value: "+29%", label: "Retention Revenue" },
      { value: "1.8M", label: "Profiles Analyzed" },
      { value: "7", label: "Segments Discovered" },
      { value: "-34%", label: "Campaign Cost/User" },
    ],
    steps: [
      {
        tag: "Overview",
        title: "Business Context & Data Overview",
        desc: "Trigger proyek ini adalah observasi dari tim CRM: open rate email campaign turun dari 24% ke 11% dalam 8 bulan terakhir, dan unsubscribe rate naik 3x lipat. Diagnosa awal: pesan yang dikirim terlalu generik dan tidak relevan — semua 1.8 juta subscriber dapat email yang sama, tanpa mempertimbangkan apakah mereka baru beli kemarin atau sudah 6 bulan tidak transaksi. Dataset yang digunakan: 3 tahun histori transaksi dari e-commerce platform (24 juta baris), data login dan browsing behavior dari product analytics, histori buka email dan klik dari ESP (Email Service Provider), dan data profil demografis dari proses registrasi. Semua data digabungkan di data warehouse menggunakan SQL — tantangan utamanya adalah banyak customer yang punya akun ganda atau berganti email, sehingga diperlukan entity resolution sebelum analisis.",
      },
      {
        tag: "Analysis",
        title: "RFM Scoring & Cluster Analysis",
        desc: "Langkah pertama: hitung tiga dimensi RFM untuk setiap customer — Recency (berapa hari sejak transaksi terakhir), Frequency (berapa kali transaksi dalam 12 bulan), dan Monetary (total nilai transaksi). Setiap dimensi di-score 1–5 menggunakan quintile binning, menghasilkan RFM score tiga digit (contoh: 555 = pelanggan terbaik, 111 = hampir churn). Di atas RFM, ditambahkan 4 dimensi perilaku tambahan: average basket size, kategori produk favorit, channel pembelian (mobile vs web), dan responsivitas terhadap promo (apakah biasanya beli saat diskon atau mau bayar full price). Total 7 dimensi ini kemudian dimasukkan ke K-Means clustering setelah normalisasi. Pemilihan K=7 ditentukan menggunakan elbow method dan silhouette score — dicoba dari K=3 sampai K=12, dan K=7 menghasilkan cluster yang paling well-separated dan paling interpretable secara bisnis.",
      },
      {
        tag: "Insight",
        title: "Segment Discovery & Profiling",
        desc: "Tujuh segmen yang ditemukan punya karakteristik yang sangat berbeda dan masing-masing langsung bisa diinterpretasi secara bisnis — ini tanda bahwa segmentasi berhasil. Segmen yang paling menarik: (1) 'Sleeping Giants' — 180.000 customer dengan historical spend tinggi tapi tidak transaksi 4–9 bulan terakhir. Ini segmen paling berharga untuk win-back campaign. (2) 'Promo Hunters' — beli hanya saat ada diskon besar, tapi frekuensinya tinggi. Margin-nya tipis, tapi volume besar. (3) 'Brand Loyalists' — 67.000 customer yang beli rutin, jarang tunggu promo, dan open rate email-nya 3x rata-rata. Ini segmen yang perlu dijaga dengan program eksklusif sebelum kompetitor merebutnya. (4) 'One and Done' — 410.000 customer yang hanya pernah satu kali transaksi, mayoritas masuk dari campaign akuisisi berbayar. Ini pembuktian bahwa ada kebocoran besar di onboarding.",
      },
      {
        tag: "Technical",
        title: "Pipeline & CRM Integration",
        desc: "Hasil segmentasi tidak berguna kalau hanya ada di notebook Jupyter. Tantangan utama proyek ini justru di sisi operasionalisasi: bagaimana setiap customer selalu punya segment label yang up-to-date dan label itu bisa diakses oleh sistem CRM untuk personalisasi otomatis. Solusinya: pipeline segmentasi ulang berjalan setiap minggu via Airflow — setiap Senin pagi, RFM score dan cluster assignment seluruh customer di-recalculate. Hasilnya disync ke Segment (Customer Data Platform) via API, yang kemudian mendistribusikan data ini ke Braze (untuk email dan push notification) dan Tableau (untuk monitoring dashboard). Di Braze, tim CRM tinggal memilih segment sebagai audience target tanpa perlu request manual ke tim data. Pertama kalinya dalam sejarah perusahaan, tim marketing bisa kirim kampanye yang benar-benar berbeda isi dan timingnya untuk setiap kelompok pelanggan.",
      },
      {
        tag: "Recommendation",
        title: "Business Recommendations",
        desc: "Lima rekomendasi aksi konkret yang langsung dieksekusi berdasarkan temuan segmentasi. Pertama, luncurkan win-back campaign khusus 'Sleeping Giants' dengan offer eksklusif yang tidak dipublikasikan ke umum — hasil: 23% dari segmen ini kembali transaksi dalam 60 hari. Kedua, buat loyalty program tier-based khusus untuk 'Brand Loyalists' — akses early sale, free ongkir permanen, dan personal shopping assistant via WhatsApp. Ketiga, stop kirim promo besar ke 'Promo Hunters' terlalu sering karena justru melatih mereka untuk tidak pernah mau beli full price — ganti dengan content marketing dan product education untuk menaikkan perceived value. Keempat, redesign seluruh onboarding flow untuk menekan angka 'One and Done' — audit menunjukkan tidak ada follow-up sama sekali setelah transaksi pertama. Kelima, evaluasi ulang channel akuisisi yang mendatangkan paling banyak 'One and Done' karena kemungkinan besar kualitas traffic-nya rendah.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];