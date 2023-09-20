const bookdata = [
  {
    class: "Class 1",
    subject: "Mathematics",
    description: "A comprehensive guide to mathematics for Class 1 students.",
    title: "Math Magic",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 1",
    subject: "Mathematics",
    description: "A comprehensive guide to mathematics for Class 1 students.",
    title: "Ganit Ka Jaadu",
    image_url: "https://ncert.nic.in/textbook/pdf/ahmh1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 1",
    subject: "English",
    title: "Marigold",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 1",
    subject: "English",
    title: "Raindrops",
    image_url: "https://ncert.nic.in/textbook/pdf/aerd1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 1",
    subject: "Hindi",
    title: "Rimjhim-1",
    image_url: "https://ncert.nic.in/textbook/pdf/ahhn1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 2",
    subject: "Mathematics",
    description: "A comprehensive guide to mathematics for Class 2 students.",
    title: "Math Magic-2",
    image_url: "https://ncert.nic.in/textbook/pdf/bemh1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 2",
    subject: "English",
    image_url: "https://ncert.nic.in/textbook/pdf/berd1cc.jpg",
    title: "Raindrops-2",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 2",
    subject: "Science",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 3",
    subject: "Mathematics",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    description: "A comprehensive guide to mathematics for Class 3 students.",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 3",
    subject: "English",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 3",
    subject: "Science",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 3",
    subject: "Mathematics",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    description: "A comprehensive guide to mathematics for Class 3 students.",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 4",
    subject: "English",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 4",
    subject: "Science",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 4",
    subject: "Mathematics",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    description: "A comprehensive guide to mathematics for Class 4 students.",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 5",
    subject: "English",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 5",
    subject: "Science",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 5",
    subject: "Mathematics",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    description: "A comprehensive guide to mathematics for Class 5 students.",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 6",
    subject: "English",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 6",
    subject: "Science",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  // Add more entries for different classes and subjects...
  {
    class: "Class 12",
    subject: "Mathematics",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    description: "A comprehensive guide to mathematics for Class 12 students.",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 12",
    subject: "Physics",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  {
    class: "Class 12",
    subject: "Chemistry",
    image_url: "https://ncert.nic.in/textbook/pdf/aemr1cc.jpg",
    download_link:
      "https://drive.google.com/file/d/1Q2hkb5L2HW24sl111RmXcGnIvId0eCnT/view?usp=drive_link",
  },
  // Add more entries for Class 12 subjects...
];

export default bookdata;
