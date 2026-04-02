// ─── STEP STRUCTURE ──────────────────────────────────────────────────────────
// tag options: "Impact" | "Business" | "Overview" | "Analysis" | "Visual" | "Technical"
// min 3, max 6 steps per project
// urutan: insight dulu (non-tech) → rekomendasi → data overview → EDA → visual → teknis
// ─────────────────────────────────────────────────────────────────────────────

export const portfolioData = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Revenue Dashboard",
    stat: "New • Revenue Pipeline",
    accentBg: "bg-primary",
    mockupBg: "bg-primary/20",
    desc: "Built an end-to-end analytics pipeline uncovering a 23% revenue uplift by segmenting 2M+ customer transactions and correlating purchase patterns with marketing spend.",
    heroDesc:
      "Say goodbye to blind spots in your sales! We transformed 2 million fragmented customer transaction records into a clear, actionable story. By connecting the dots between user behavior and marketing spend, this project uncovered a hidden $1.2M revenue opportunity for the business in under 6 months.",
    tags: ["Python", "SQL", "Tableau", "BigQuery"],
    metrics: [
      { value: "$1.2M", label: "Revenue Found" },
      { value: "2M+", label: "Rows Analyzed" },
      { value: "95%", label: "Data Accuracy" },
      { value: "12+", label: "Data Sources" },
    ],
    steps: [
      {
        tag: "Impact",
        title: "Key Insights",
        desc: "Ditemukan peluang revenue tersembunyi sebesar $1.2M. Frekuensi pembelian tertinggi terjadi di Selasa malam. Tingkat cart abandonment di mobile 3× lebih tinggi dibanding desktop — masalah UX yang langsung bisa dieksekusi.",
      },
      {
        tag: "Business",
        title: "Rekomendasi Bisnis",
        desc: "Alihkan 30% budget email ke push notification Selasa malam. Prioritaskan redesign checkout mobile. Fokuskan promosi pada 12% SKU yang menghasilkan 80% revenue.",
      },
      {
        tag: "Overview",
        title: "Data Overview",
        desc: "2M+ catatan transaksi dari 12 sumber: Shopify, Google Ads, CRM, dan log gudang. Semua diharmonisasi ke dalam satu skema BigQuery yang bersih dan terstandardisasi.",
      },
      {
        tag: "Analysis",
        title: "Exploratory Data Analysis (EDA)",
        desc: "80% revenue dihasilkan dari 12% SKU — distribusi Pareto yang tajam. Terdeteksi 3 lonjakan musiman yang berkorelasi langsung dengan tanggal kampanye pemasaran.",
      },
      {
        tag: "Visual",
        title: "Dashboard & Visualisasi",
        desc: "Dashboard Tableau interaktif dengan 8 tampilan: revenue per segmen, kohort retensi, dan atribusi channel. Dapat difilter real-time tanpa bantuan engineer.",
      },
      {
        tag: "Technical",
        title: "Technical Pipeline",
        desc: "ETL end-to-end dibangun dengan Python + SQL, dijadwalkan via Airflow, dan di-host di BigQuery. Seluruh pipeline terdokumentasi di GitHub dan bisa direproduksi.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "churn-prediction",
    title: "Customer Churn Prediction Model",
    stat: "AI • Predictive Analytics",
    accentBg: "bg-secondary",
    mockupBg: "bg-secondary/20",
    desc: "Developed a logistic regression model with 87% accuracy to predict churn 30 days ahead, enabling retention campaigns that reduced churn by 18%.",
    heroDesc:
      "Stop losing customers before they even leave. This predictive analytics initiative analyzes user engagement signals to build an early warning system. With 87% accuracy, the marketing team can now intervene 30 days early, saving tens of thousands of users from churning to competitors.",
    tags: ["Python", "Scikit-learn", "Pandas", "Power BI"],
    metrics: [
      { value: "87%", label: "Model Accuracy" },
      { value: "-18%", label: "Churn Reduced" },
      { value: "50k", label: "Users Retained" },
      { value: "30", label: "Days Lead Time" },
    ],
    steps: [
      {
        tag: "Impact",
        title: "Key Insights",
        desc: "User yang tidak login selama 14+ hari memiliki probabilitas churn 78%. Jendela intervensi paling efektif adalah hari ke-10 hingga ke-13 sebelum mereka benar-benar pergi.",
      },
      {
        tag: "Business",
        title: "Rekomendasi Bisnis",
        desc: "Trigger email re-engagement personal di hari ke-10. Tawarkan diskon loyalitas di hari ke-12 khusus segmen high-value. Potensi penghematan: $480k per kuartal dari 50k user yang berhasil dipertahankan.",
      },
      {
        tag: "Overview",
        title: "Data Overview",
        desc: "50k catatan user dengan 40+ fitur behavioral: frekuensi login, pemakaian fitur, tiket support, dan riwayat billing. Data periode 18 bulan dari SQL Server.",
      },
      {
        tag: "Analysis",
        title: "Exploratory Data Analysis (EDA)",
        desc: "Churn 3× lebih umum di pengguna free-tier. Heatmap menunjukkan penurunan aktivitas signifikan 48 jam sebelum pembatalan — pola yang konsisten di 91% kasus.",
      },
      {
        tag: "Technical",
        title: "Model Development & Deployment",
        desc: "Baseline Logistic Regression (81%) ditingkatkan ke 87% via feature engineering. Divalidasi dengan k-fold cross-validation. Model di-serve via FastAPI, prediksi diperbarui harian.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "supply-chain",
    title: "Supply Chain Optimization",
    stat: "Growth • Logistics",
    accentBg: "bg-blue-300",
    mockupBg: "bg-blue-300/20",
    desc: "Analyzed 5 years of supply chain data across 12 warehouses to identify bottlenecks — cutting delivery delays by 31% and saving $1.2M annually.",
    heroDesc:
      "Delivering faster and cheaper through data. By aggregating and analyzing 5 years of complex logistical data across 12 major warehouse hubs, we identified critical bottlenecks in the last-mile delivery system, leading to a massive 31% reduction in late shipments.",
    tags: ["SQL", "Python", "R", "Looker"],
    metrics: [
      { value: "-31%", label: "Delays Cut" },
      { value: "12", label: "Warehouses" },
      { value: "5 Yrs", label: "Data History" },
      { value: "100k", label: "Routes Optimized" },
    ],
    steps: [
      {
        tag: "Impact",
        title: "Key Insights",
        desc: "Rute 7 (Jakarta–Surabaya) menyumbang 42% dari total keterlambatan. Kemacetan puncak terjadi Senin pukul 06.00–10.00. Tiga hub pergudangan terbukti redundan dan justru memperlambat distribusi.",
      },
      {
        tag: "Business",
        title: "Rekomendasi Bisnis",
        desc: "Geser 40% pengiriman Senin ke Minggu malam. Konsolidasi 3 hub yang underperforming. Potensi penghematan: $1.2M per tahun dari efisiensi operasional dan penurunan biaya lembur.",
      },
      {
        tag: "Overview",
        title: "Data Overview",
        desc: "5 tahun catatan pengiriman dari 12 gudang dan 500+ rute. Data digabungkan dengan API eksternal — data lalu lintas real-time dan kondisi cuaca — untuk analisis yang lebih kontekstual.",
      },
      {
        tag: "Analysis",
        title: "Network & Bottleneck Analysis",
        desc: "Analisis graph jaringan mengidentifikasi 23 relay stop redundan. Menghapus stopan tersebut memangkas rata-rata waktu pengiriman sebesar 2.1 hari per shipment.",
      },
      {
        tag: "Visual",
        title: "Dashboard Looker",
        desc: "Dashboard Looker dengan drill-down per gudang, rute, dan periode waktu. Tim operasional dapat memantau KPI ketepatan waktu secara mandiri tanpa bergantung ke tim data.",
      },
      {
        tag: "Technical",
        title: "Technical Stack",
        desc: "Pipeline agregasi SQL + Python NetworkX untuk pemodelan graf rute. Berjalan di atas AWS, dikontainerisasi dengan Docker, dan dimonitor via CloudWatch.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "marketing-attribution",
    title: "Marketing Attribution Study",
    stat: "Insight • Marketing",
    accentBg: "bg-highlight",
    mockupBg: "bg-highlight/20",
    desc: "Designed a multi-touch attribution model that replaced last-click, leading to a 40% reallocation of budget toward higher-ROI channels.",
    heroDesc:
      "Where is the marketing budget really going? By developing a sophisticated multi-touch attribution model, this project dismantles the outdated 'last-click' myth. It reveals the true customer journey, allowing stakeholders to confidently reallocate 40% of their ad spend to channels that actually drive conversion.",
    tags: ["SQL", "dbt", "Tableau", "Excel"],
    metrics: [
      { value: "+40%", label: "Budget Efficiency" },
      { value: "3x", label: "Higher ROI" },
      { value: "10+", label: "Ad Channels" },
      { value: "$2M+", label: "Spend Reallocated" },
    ],
    steps: [
      {
        tag: "Impact",
        title: "Key Insights",
        desc: "Facebook Ads mendapat kredit last-click terbesar, padahal organic search adalah titik konversi pertama di 60% perjalanan pelanggan. Email memiliki ROI 4.2× — selama ini sangat under-invested.",
      },
      {
        tag: "Business",
        title: "Rekomendasi Bisnis",
        desc: "Realokasi $800k dari paid social ke SEO konten dan email nurture. Hentikan penghitungan performa channel berbasis last-click — ganti dengan Shapley Value sebagai standar baru tim marketing.",
      },
      {
        tag: "Overview",
        title: "Data Overview",
        desc: "10+ channel iklan dilacak selama 18 bulan. Semua touchpoint diharmonisasi via parameter UTM dan pemetaan CRM — menghasilkan pandangan perjalanan pelanggan yang utuh dan akurat.",
      },
      {
        tag: "Analysis",
        title: "Multi-Touch Attribution Modeling",
        desc: "Membandingkan 4 model: last-click, linear, time-decay, dan Shapley Value. Shapley terbukti paling akurat karena mempertimbangkan kontribusi nyata tiap touchpoint tanpa bias posisi.",
      },
      {
        tag: "Technical",
        title: "Technical Implementation",
        desc: "Model dbt mentransformasi raw event log iklan menjadi tabel attribution-ready. Dashboard Tableau refresh otomatis harian. Seluruh transformasi terdokumentasi dan dapat diaudit.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];