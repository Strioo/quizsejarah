const questions = [
        {
            question : "Salah satu dibawah ini yang bukan termasuk ciri – ciri demokrasi liberal adalah",
            answer : [
                { text : "Presiden dan Wakil Presiden tidak dapat diganggu gugat", correct: false},
                { text : "Perdana Menteri diangkat oleh Presiden", correct: false},
                { text : "Presiden tidak bisa dan tidak berhak membubarkan DPR", correct: true},
                { text : "Jatuh bangunnya kabinet/ silih berganti memimpin kabinet", correct: false},
            ]
        } ,
        {
            question : "Kabinet Natsir dipimpin oleh",
            answer : [
                { text : "Masyumi", correct: true},
                { text : "Mohammad Natsir", correct: false},
                { text : "Sri Sultan Hamengkubuwono IX", correct: false},
                { text : "Dr. Soemitro Djojohadikoesoemo", correct: false},
            ]
        } ,
        {
            question : "Demokrasi liberal (atau demokrasi konstitusional) adalah sistem politik yang menganut kebebasan individu. Kurun waktu pelaksanaan Demokrasi Liberal adalah tahun",
            answer : [
                { text : "1950-1959", correct: true},
                { text : "1949-1950", correct: false},
                { text : "1965-1998", correct: false},
                { text : "1959-1965", correct: false},
            ]
        } ,
        {
            question : "Kabinet baru dipimpin oleh Ir. Djuanda yang kemudian membentuk kabinet yang terdiri dari para menteri yang ahli dalam bidangnya. Kabinet ini dikenal dengan istilah Zaken Kabinet karena harus berisi unsur ahli dan golongan intelektual dan tidak adanya unsur partai politik di dalamnya. Program kerja kabinet Djuanda dikenal dengan nama",
            answer : [
                { text : "Panca Sila", correct: false},
                { text : "Persatuan Indonesia", correct: false},
                { text : "Golongan Karya", correct: false},
                { text : "Panca Karya", correct: true},
            ]
        } ,
        {
            question : "Sejak kembali menjadi negara kesatuan, Indonesia masuk pada era demokrasi parlementer atau liberal. Jalannya pemerintahan pada masa ni tetap tidak stabil karena",
            answer : [
                { text : "tidak solidnya angkatan perang sehingga keamanan negara tidak terjamin", correct: false},
                { text : "presiden bertindak tidak profesional dengan mengangkat orangorang terdekatnya", correct: false},
                { text : "sering terjadi pergantian kabinet dengan masa kerja yang singkat", correct: true},
                { text : "para menteri diangkat dalam kabinet yang terdiri atas orang-orang yang tidak terampil", correct: false},
            ]
        } ,
        {
            question : "Konferensi Asia Afrika dilangsungkan saat kabinet",
            answer : [
                { text : "Ali Sastroamijoyo II", correct: false},
                { text : "Ali Sastroamijoyo I", correct: true},
                { text : "M. Natsir", correct: false},
                { text : "Burhanuddin Harahap", correct: false},
            ]
        } ,
        {
            question : "Sebab utama jatuhnya Kabinet Sukiman adalah",
            answer : [
                { text : "Penandatangan Mutual Security Act dengan Amerika Serikat", correct: true},
                { text : "Anggota kabinet yang kecewa", correct: false},
                { text : "Perselisihan pendapat dengan TNI AD", correct: false},
                { text : "Korupsi merajalela di setiap lembaga negara", correct: false},
            ]
        } ,
        {
            question : "Untuk memajukan ekonominya kabinet Ali 1 memperkenalkan sistim ekonomi Alibaba yaitu",
            answer : [
                { text : "melarang penggunaan hewan ternak untuk konsumsi pribadi", correct: false},
                { text : "membantu pengusaha melakukan eksport", correct: false},
                { text : "menggalang kerjasana pengusaha pribumi dan non pribumi", correct: true},
                { text : "menggunakan nilai tukar uang sebagian", correct: false},
            ]
        } ,
        {
            question : "Latar belakang diadakannya Pemilu I tahun 1955 adalah",
            answer : [
                { text : "Keinginan mewujudkan parlemen yang merupakan aspirasi rakyat", correct: true},
                { text : "Para wakil partai politik tidak melaksanakan tugas sebagai penyalur aspirasi rakyat", correct: false},
                { text : "Mengganti status negara serikat ke kesatuan", correct: false},
                { text : "Mengubah Demokrasi Liberal menjadi Demokrasi Terpimpin", correct: false},
            ]
        } ,
        {
            question : "Perhatikan hal-hal berikut ini! (1)Menjamin keamanan dan ketentraman, (2)Mengusahakan kemakmuran rakyat dan memperbaharui hukum agraria agar sesuai dengan kepentingan petani, (3)Mempercepat persiapan pemilihan umum, (4)Menjalankan politik luar negeri secara bebas aktif serta memasukkan Irian Barat ke dalam wilayah RI secepatnya, (5)Menyiapkan undang – undang tentang pengakuan serikat buruh, perjanjian kerja sama, penetapan upah minimum, dan penyelesaian pertikaian buruh.  Hal tersebut adalah pokok program dari Kabinet ",
            answer : [
                { text : "Sukiman", correct: true},
                { text : "Ali Sastroamijoyo", correct: false},
                { text : "Natsir", correct: false},
                { text : "Djuanda", correct: false},
            ]
        } ,
        {
            question : "Kabinet Syahrir I hanya bertahan selama tiga bulan dan harus menyerahkan mandatnya kepada Presiden Soekarno. Kondisi tersebut terjadi karena",
            answer : [
                { text : "Banyaknya penolakan terhadap penerapan sistem pemerintahan Parlementer.", correct: false},
                { text : "Parlemen terlalu mencampuri kinerja dan kebijakan yang dikeluarkan kabinet.", correct: false},
                { text : "Kondisi keamanan yang tidak stabil akibat Agresi Militer Belanda.", correct: false},
                { text : "Kabinet Syahrir I tidak memiliki mayoritas suara diparlemen. ", correct: true},
            ]
        } ,
        {
            question : "Tujuan Wilopo menerapkan prinsip ZAKEN KABINET dalam menjalankan pemerintahan adalah",
            answer : [
                { text : "Mengakomodasi kepentingan partai politik dalam jalannya pemerintahan.", correct: false},
                { text : "Menghindari gesekan antara anggota kabinet dan partai oposisi.", correct: false},
                { text : "Menerapkan sistem Demokrasi Pancasila dalam kehidupan kabinet.", correct: false},
                { text : "Menyelesaikan permasalahan bangsa tanpa mengutamakan kepentingan golongan tertentu.", correct: true},
            ]
        } ,
        {
            question : "Presiden Indonesia yang mengganti nama Irian Jaya menjadi Papua dalam upaya mengatasi konflik dan disintegrasi bangsa adalah",
            answer : [
                { text : "B.J. Habibie", correct: false},
                { text : "Abdurrahman Wahid", correct: true},
                { text : "Soeharto", correct: false},
                { text : "Joko Widodo", correct: false},
            ]
        } ,
        {
            question : "Kabinet Ali Sastro Amijoyo (31 juli 1953-12 Agustus 1955) merupakan koalisi antara",
            answer : [
                { text : "PNI dan NU ", correct: true},
                { text : "NU", correct: false},
                { text : "PNI", correct: false},
                { text : "PNI, Masyumi, NU", correct: false},
            ]
        } ,
        {
            question : "Masa Demokrasi Liberal sering diwarnai dengan pergantian kabinet. Agar bertahan lama, sebuah kabinet pada masa Demokrasi Liberal harus",
            answer : [
                { text : "Mendukung UUD 1945 sebagai konstituante Negara Indonesia", correct: false},
                { text : "Berasal dari partai yang sama dengan Presiden Soekarno", correct: false},
                { text : "Mendapat dukungan dari mayoritas anggota parlemen", correct: true},
                { text : "Dipilih langsung oleh rakyat melalui pemilihan umum", correct: false},
            ]
        } ,
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); // perbaikan disini
const nextButton = document.getElementById("next-btn"); // perbaikan disini
const backButton = document.getElementById("back-btn");

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Perbaikan: Pindahkan resetState di luar loop forEach
    resetState();

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){ // Perbaikan disini
        answerButtons.removeChild(answerButtons.firstChild); // Perbaikan disini
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Skor Kamu ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Mulai lagi";
    nextButton.style.display = "block"
    backButton.style.display = "block";
    backButton.innerHTML = "Kembali ke Materi";
    backButton.style.display = "block"
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

backButton.addEventListener("click", ()=>{
    redirectToIndexPage();
})

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton(); 
    }else{
        startQuiz();
    }
})

function redirectToIndexPage() {
    window.location.href = "index.html";
}

startQuiz();


function scrollToContent() {
    gsap.to('#content-section', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
    });

    gsap.to(window, {
        scrollTo: {
            y: '#content-section',
            offsetY: 50,
        },
        duration: 1.5,
        ease: 'power4.out',
    });
}

document.addEventListener('scroll', function () {
    var contentSection = document.getElementById('content-section');
    var rect = contentSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        gsap.to('#content-section', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
        });
    }
});

function animateWelcomeText() {
    gsap.fromTo(
        '.fun-heading',
        {
            opacity: 0,
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        },
        {
            opacity: 1,
            textShadow: '0 0 30px rgba(255, 255, 255, 1)',
            duration: 1.5,
            ease: 'power2.out',
        }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    animateWelcomeText();
});