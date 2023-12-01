const data = [
	{ 
		id: 1,
		name: 'Introduction to Computer Science',
		instructor: 'Dr. Jane Smith',
		coursedescription: 'Explore the fundamental concepts of computer science and programming.Learn new Ways',
		enrollmentStatus: 'Open',
		image: 'https://nwc.edu/academics/photos/program-photos/computer-science.jpg',
		duration: '12 weeks',
		schedule: 'Mondays and Wednesdays, 4:00 PM - 6:00 PM',
		location: 'Online',
		prerequisites: ['Basic mathematics knowledge'],
		syllabus: [
		  {
			week: 1,
			topic: 'Introduction to Computer Science',
			content: 'Overview of computer science, history, and basic concepts.',
		  },
		  {
			week: 2,
			topic: 'Programming Fundamentals',
			content: 'Introduction to programming languages and basic coding principles.',
		  },
		  // Additional weeks and topics...
		],
		students: [
		  {
			id: 101,
			name: 'Alice Johnson',
			email: 'alice@example.com',
		  },
		  {
			id: 102,
			name: 'Bob Smith',
			email: 'bob@example.com',
		  },
		  // Additional enrolled students...
		],
	  },
	  {
		id: 2,
		name: 'Web Development Bootcamp',
		instructor: 'Prof. Michael Brown',
		coursedescription: 'Learn the essentials of web development, including HTML, CSS, and JavaScript.',
		enrollmentStatus: 'Open',
		image: 'https://file.mockplus.com/image/2018/09/ab8ebe26-a88f-4c14-aafb-0a12f18eada2.jpg',
		duration: '10 weeks',
		schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
		location: 'Online',
		prerequisites: ['Basic understanding of HTML and CSS'],
		syllabus: [
		  {
			week: 1,
			topic: 'HTML Basics',
			content: 'Introduction to HTML and creating web pages.',
		  },
		  {
			week: 2,
			topic: 'CSS Styling',
			content: 'Styling web pages using CSS.',
		  },
		  // Additional weeks and topics...
		],
		students: [
		  {
			id: 201,
			name: 'Charlie Davis',
			email: 'charlie@example.com',
		  },
		  {
			id: 202,
			name: 'Diana Miller',
			email: 'diana@example.com',
		  },
		  // Additional enrolled students...
		],
	  },
];

export default data;
