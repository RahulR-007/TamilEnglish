const questions = [
    {
      question: "The number of regional languages recognized by the Indian Constitution is",
      options: ["27", "29", "22", "23"],
      answer: 2,
    },
    {
      question: "The Sangam age is between",
      options: ["300 BC to 600 AD", "600 BC to 300 AD", "900 BC to 600 AD", "500 BC to 300 AD"],
      answer: 1,
    },
    {
      question: "The term Tamilkoorum Nal Ulagam was mentioned in",
      options: ["Tholkaapiyam", "Nannool", "Silappadigaaram", "Thirukkural"],
      answer: 0,
    },
    {
      question: "The current Tamil script consists of",
      options: ["12 vowels and 15 consonants", "18 vowels and 12 consonants", "15 vowels and 12 consonants", "12 vowels and 18 consonants"],
      answer: 3,
    },
    {
      question: "Tamil Sangam flourished during the period of",
      options: ["Cheras", "Pandyas", "Cholas", "Pallavas"],
      answer: 1,
    },
    {
      question: "Natrinai belongs to",
      options: ["Pathinenkeelkanaku", "Pathupaattu", "Agathiyam", "Ettuthogai"],
      answer: 3,
    },
    {
      question: "Yaadhum Ooore Yaavarum Kelir was the statement of",
      options: ["Kanian Poonkundranaar", "Kapilar", "Kannan Chendanaar", "Madurai Koodalur Kilaar"],
      answer: 0,
    },
    {
      question: "The entire kingdom in Sangam Era was called",
      options: ["Perur", "Nadu", "Mandalam", "Pattinam"],
      answer: 2,
    },
    {
      question: "The main commentary of Thirukkural was done by",
      options: ["Manakkudawar", "G.U. Pope", "Parimelalakar", "Muthusamy"],
      answer: 2,
    },
    {
      question: "Thirukkural was written",
      options: ["1800 years ago", "2200 years ago", "2500 years ago", "2000 years ago"],
      answer: 3,
    },
    {
      question: "Valluvar’s philosophical ideologies are applicable to",
      options: ["Tamilagam", "Entire world", "Dravida Nadu", "Entire India"],
      answer: 1,
    },
    {
      question: "Manimekalai was authored by",
      options: ["Seethalai Saathanaar", "Ilango Adigal", "Appar", "Sambandar"],
      answer: 0,
    },
    {
      question: "The “Kannaki Kottam” or “Mankaladevi Temple” was built by",
      options: ["Pandian Nedunchezhian", "Cheran Senguttuvan", "Karikala Chola", "Narasimhavarma Pallava"],
      answer: 1,
    },
    {
      question: "The hymns of Naayanmaars called Thevaram was compiled by",
      options: ["Naathamuni", "Thiruthakka Thevar", "Nathakuthannar", "Nambiyandar Nambi"],
      answer: 3,
    },
    {
      question: "The great woman saint of the Alwaars was",
      options: ["Avvaiyaar", "Ponmudiyaar", "Andal", "Kakkaipadiyiniaar"],
      answer: 2,
    },
    {
      question: "The greatest of the Twelve Alwaars was",
      options: ["Nammalvar", "Periyalvar", "Kulasekara Alwaar", "Thirumangai Alwaar"],
      answer: 0,
    },
    {
      question: "Kannan Paattu was the work of",
      options: ["Bharathidhasan", "Kumara Guruparar", "Mahakavi Bharathiyaar", "Maraimalai Adigal"],
      answer: 2,
    },
    {
      question: "“We will create a brave new world” was the call of",
      options: ["Bharathidhasan", "Subramania Bharathiyaar", "Paranjothi Munivar", "M. Karunanidhi"],
      answer: 0,
    },
    {
      question: "The number of Worlds’ Heritage sites declared by UNESCO in Tamil Nadu is",
      options: ["Seven", "Twelve", "Four", "Five"],
      answer: 3,
    },
    {
      question: "The tallest Raja Gopuram is in",
      options: ["Brihadeeshwara Temple", "Sri Ranganathaswamy Temple", "Meenakshi Amman Temple", "Kanchi Kailasanaatha Temple"],
      answer: 1,
    },
    {
      question: "The temple totally built from stone is",
      options: ["Thillai Nataraja", "Kapaleeshwarar", "Ramanathaswamy", "Brihadeeshwaara"],
      answer: 3,
    },
    {
      question: "The number of tribes and sub-tribes in Tamil Nadu is",
      options: ["38", "33", "83", "44"],
      answer: 0,
    },
    {
      question: "The tribes of Tamil Nadu are concentrated in the district of",
      options: ["Coimbatore", "The Nilgiris", "Tirunelveli", "Salem"],
      answer: 1,
    },
    {
      question: "The tallest temple car is in",
      options: ["Bhavani Kooduthurai", "Chidambaram", "Avinashi", "Thiruvaarur"],
      answer: 3,
    },
    {
      question: "The height of Thiruvalluvar statue at Kanyakumari is",
      options: ["133 feet", "144 feet", "138 feet", "135 feet"],
      answer: 0,
    },
    {
      question: "A double reed wind instrument of South India is",
      options: ["Yaal", "Veenai", "Parai", "Naadheswaram"],
      answer: 3,
    },
    {
      question: "An ancient stick-martial art is",
      options: ["Kalari Payitru", "Silambam", "Valari", "Kuthu Varisai"],
      answer: 1,
    },
    {
      question: "The ancient game of Tamil Nadu which needs breath control, raid, and dodging movements is",
      options: ["Theru Koothu", "Pallankulai Aatam", "Kabaddi", "Karakaattam"],
      answer: 2,
    },
    {
      question: "Puliyattam usually comprises a troupe of",
      options: ["Three performers", "Six performers", "Eight performers", "Four performers"],
      answer: 1,
    },
    {
      question: "The mountainous region was called",
      options: ["Kurinji", "Neithal", "Paalai", "Marudham"],
      answer: 0,
    },
    {
      question: "The number of physiographic divisions in Tamil Nadu is",
      options: ["Five", "Eight", "Three", "Two"],
      answer: 3,
    },
    {
      question: "The Naayanmaars who were devoted to Siva were",
      options: ["12", "36", "63", "52"],
      answer: 2,
    },
    {
      question: "The Alwaars who were devoted to Lord Vishnu and his avatars were",
      options: ["12", "18", "21", "15"],
      answer: 0,
    },
    {
      question: "The granary of South India is",
      options: ["Trichy", "Thanjavur", "Tirunelveli", "Thoothukudi"],
      answer: 1,
    },
    {
      question: "A powerful Navy was maintained by the",
      options: ["Cholas", "Pallavas", "Cheras", "Pandiyas"],
      answer: 0,
    },
    {
      question: "Sangam Age is also called as",
      options: ["Iron Age", "Copper Age", "Coin Age", "Bronze Age"],
      answer: 2,
    },
    {
      question: "The Chief occupation of Sangam Age was",
      options: ["Internal trade", "External trade", "Metal work", "Agriculture"],
      answer: 3,
    },
    {
      question: "One of the longest ruling dynasties in the history of the world was",
      options: ["Pallavaas", "Cholas", "Pandiyas", "Cheras"],
      answer: 1,
    },
    {
      question: "The latest excavations at Keeladi are now in",
      options: ["Sivagangai", "Tirunelveli", "Kanyakumari", "Salem"],
      answer: 0,
    },
    {
      question: "Pooli Thevan was the Paalayarkkaarar near",
      options: ["Coimbatore", "Erode", "Dindigul", "Tirunelveli"],
      answer: 3,
    },
    
        {
          question: "The First Sangam was believed to have been presided over by",
          options: ["Tholkappiar", "Agasthya", "Variyar", "Parimelalagar"],
          answer: 1,
        },
        {
          question: "The Father of Dravidian languages research was",
          options: ["L Hart", "Caldwell", "Ellys", "Paavaanar"],
          answer: 1,
        },
        {
          question: "The number of languages spoken in India was",
          options: ["1652", "1651", "1650", "1642"],
          answer: 0,
        },
        {
          question: "Chithanna Vaasal paintings are in the district of",
          options: ["Namakkal", "Puthukkottai", "Ramanathapuram", "Thoothukudi"],
          answer: 1,
        },
        {
          question: "Bhakti Movement started first in",
          options: ["East India", "North India", "South India", "Central India"],
          answer: 2,
        },
        {
          question: "The person who translated Thiruvasakam in English was",
          options: ["Ellyson", "William Arvy", "G.U. Pope", "Besky"],
          answer: 2,
        },
        {
          question: "The author who wrote Tamil without the influence of Sanskrit was",
          options: ["Bharathiyar", "G.U. Pope", "Veeramamunivar", "Maraimalai Adigal"],
          answer: 3,
        },
        {
          question: "The English East India Company was started in India in",
          options: ["1700 AD", "1600 AD", "1500 AD", "1400 AD"],
          answer: 1,
        },
        {
          question: "Velu Natchiyar was helped by",
          options: ["Marudu Brothers", "Katta Bomman", "Theeran Chinnamalai", "V.O. Chidambaranaar"],
          answer: 0,
        },
        {
          question: "Swadeshi Steam Navigation Company was started by",
          options: ["Subramaniya Siva", "V.O. Chidambaranaar", "Periyar", "Pooli Thevan"],
          answer: 1,
        },
        {
          question: "The freedom fighter who died holding the flag in his hand was",
          options: ["Vaanchinathan", "Bharathiyar", "Tiruppur Kumaran", "Periyar"],
          answer: 2,
        },
        {
          question: "Kapilar was friendly with",
          options: ["Pegan", "Adhiyamaan", "Pari", "Kari"],
          answer: 2,
        },
        {
          question: "Adhiyamaan presented gooseberry to",
          options: ["Velunaatchiyar", "Kakkai Paadiniyar", "Avvaiyar", "Karaikkal Ammaiyar"],
          answer: 2,
        },
        {
          question: "The ruler who gifted his chariot for the climber was",
          options: ["Pegan", "Kari", "Pari", "Adhiyamaan"],
          answer: 0,
        },
        {
          question: "The famous saying inscribed in the UN General Assembly is",
          options: ["Yaathum Oorae Yaavarum Kaelir", "Yaavarukkumam Oru Pachilai", "Karka Kasadara", "Akanaka Narpu"],
          answer: 0,
        },
        {
          question: "The author who published the Republic was",
          options: ["Bharathiyar", "Bharathidasan", "E.V.R. Periyar", "Namakkal Kavignar"],
          answer: 2,
        },
        {
          question: "Siddha form of medicine belongs to",
          options: ["Artificial medicine", "Natural medicine", "Modern medicine", "Technological medicine"],
          answer: 1,
        },
        {
          question: "Human body consists of the following number of elements",
          options: ["Seven", "Three", "Nine", "Five"],
          answer: 3,
        },
        {
          question: "The Siddha medical practitioners diagnosed diseases using",
          options: ["Stethoscope", "Pulses", "Thermometer", "X-ray"],
          answer: 1,
        },
        {
          question: "The duration of stone inscription is",
          options: ["10 years", "100 years", "1000’s of years", "300 years"],
          answer: 2,
        },
        {
          question: "Printing machine was first invented in",
          options: ["Germany", "France", "Italy", "America"],
          answer: 0,
        },
        {
          question: "The printing machine was first invented by",
          options: ["Edision", "Samual Morse", "George Stephensen", "Gutten Burg"],
          answer: 3,
        },
        {
          question: "The boomerang originated from",
          options: ["Kalari", "Valari", "Varmam", "Spear"],
          answer: 1,
        },
        {
          question: "Tholkaapiyam refers to the following Tamil Art",
          options: ["Kalari", "Karakaattam", "Bharatanaattiyam", "Silambam"],
          answer: 1,
        },
        {
          question: "Villupattu is performed using the musical instrument",
          options: ["Urimi", "Naadaswaram", "Mathalam", "Udukkai"],
          answer: 3,
        },
        {
          question: "One of the heroic games of the Tamils is",
          options: ["Kabaddi", "Silambam", "Ballattam", "Panthattam"],
          answer: 1,
        },
        {
          question: "To escape from animals Tamils used",
          options: ["Valari", "Kalari", "Silambam", "Stones"],
          answer: 2,
        },
        {
          question: "The arm used by the Australian aborigines was",
          options: ["Valari", "Silambam", "Sword", "Boomerang"],
          answer: 3,
        },
        {
          question: "The game of the Tamil women was",
          options: ["Modi game", "Jumping", "Pallankuzhi", "Kite"],
          answer: 2,
        },
        {
          question: "The epic that refers to the Car Festival for Buddha is",
          options: ["ManimekalaI", "Chilappathikaram", "Valaiapathi", "Kundalakesi"],
          answer: 1,
        },
        {
          question: "The year in which Thiruvalluvar statue was opened was",
          options: ["1998", "2000", "2004", "2005"],
          answer: 1,
        },
        {
          question: "The queen of musical instrument is",
          options: ["Yaazh", "Mruthangam", "Veenai", "Parai"],
          answer: 2,
        },
        {
          question: "The auspicious musical instrument of South India is",
          options: ["Veenai", "Nadheswaram", "Yaazh", "Parai"],
          answer: 1,
        },
        {
          question: "The temple in which the musical instrument Yaazh is inscribed is",
          options: ["Madurai Meenakshi Amman Temple", "Kanchi Kailasanathar Temple", "Chidambaram Nataraja Temple", "Kanchi Kamatchi Amman Temple"],
          answer: 1,
        },
        {
          question: "The oldest leather musical instrument is",
          options: ["Mathalam", "Udukkai", "Mruthangam", "Parai"],
          answer: 2,
        },
        {
          question: "One of the arts of the tribes is",
          options: ["Basket making", "Mat making", "Pottery making", "Drawing"],
          answer: 2,
        },
        {
          question: "Temple means",
          options: ["Residence of Human beings", "Residence of God", "Residence of Animals", "Residence of Saints"],
          answer: 1,
        },
        {
          question: "The number of temples in Tamil Nadu is",
          options: ["36388", "36588", "36488", "36688"],
          answer: 2,
        },
        {
          question: "The premier temple of Saivites is in",
          options: ["Chidambaram", "Thiruvannamalai", "Avinashi", "Perur"],
          answer: 0,
        },
        {
          question: "The place famous for weaving in Tamil Nadu is",
          options: ["Erode", "Kanchipuram", "Madurai", "Thirunelveli"],
          answer: 1,
        },
        {
          question: "The weight of Thiruvalluvar statue is",
          options: ["5000 tonnes", "6000 tonnes", "7000 tonnes", "8000 tonnes"],
          answer: 2,
        },
        {
          question: "The monument in memory of the heroes is",
          options: ["Nadukal", "Vattakkal", "Ilavattakkal", "Rock"],
          answer: 0,
        },
        {
          question: "The total number of Thirukkural is",
          options: ["1230", "1330", "1430", "1530"],
          answer: 1,
        },
        {
          question: "Bharathiyar was the sub-editor of",
          options: ["Swadesamitran", "India", "Vijaya", "Bala Bharatham"],
          answer: 0,
        },
        {
          question: "Eightfold Path was stressed by",
          options: ["Hinduism", "Buddhism", "Jainism", "Sikhism"],
          answer: 1,
        },
        {
          question: "The place where education was important in the Sangam Age",
          options: ["School", "College", "Manram", "Paadasaala"],
          answer: 2,
        },
        {
          question: "First Sangam was held at",
          options: ["Then Madurai", "Madurai", "Kabaadapuram", "None of the above"],
          answer: 0,
        },
        {
          question: "Thiruvalluvar considers the following as the two eyes",
          options: ["Numbers and Alphabets", "Mathematics and Language", "Language and Alphabets", "None of the above"],
          answer: 1,
        },
        {
          question: "Those who took good care of the cattle were in",
          options: ["Kurunji", "Mullai", "Marudham", "Neithal"],
          answer: 2,
        },
        {
          question: "The number of women poets during the last Sangam Age was",
          options: ["46", "47", "57", "58"],
          answer: 1,
        },
        {
          question: "There was a direct trade contact between",
          options: ["Greece and South India", "Egypt and South India", "Rome and South India", "None of the above"],
          answer: 2,
        },
        {
          question: "The number of ambassadors sent to Rome by the Pandiya kings was",
          options: ["2", "3", "4", "5"],
          answer: 0,
        },
        {
          question: "The person who mentioned about ancient trade and ports was",
          options: ["Augustin", "Caldwell", "Ptolemy", "Tholkappiyar"],
          answer: 2,
        },
        {
          question: "The major export item during the Sangam period was",
          options: ["Turmeric", "Cardamom", "Ginger", "Pepper"],
          answer: 3,
        },
        {
          question: "The source to know about history next to inscriptions is",
          options: ["Trade", "Coins", "Ports", "None of the above"],
          answer: 1,
        },
        {
          question: "The major source of income to the kings was",
          options: ["Income Tax", "Land Tax", "Customs Tax", "None of the above"],
          answer: 1,
        },
        {
          question: "The important port of the Chola Empire was",
          options: ["Thondi", "Vedaranyam", "Musiri", "Kaveri Poompattinam"],
          answer: 3,
        },
        {
          question: "People led a peaceful life during the reign of",
          options: ["Rajaraja Chola", "Rajendra Chola", "Kulasekara Chola", "None of the above"],
          answer: 1,
        },
        {
          question: "The freedom fighter who was called Chekkilutha Chemmal was",
          options: ["Subramania Siva", "Bharathidasan", "K. Kamaraj", "V.O. Chidambaram Pillai"],
          answer: 3,
        },
      ];
      
  