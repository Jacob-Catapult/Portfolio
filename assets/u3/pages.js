const pages = [
	{
		title: "The First Commit",
		text: "You're USER — sleep-deprived, caffeinated, and way too excited about tech. It's the first day of the semester/hackathon season and you have one free hour before life asks you to make an adult decision.",
		options: [
			"Crash the campus hackathon room",
			"Scout internships on LinkedIn",
			"Build a mysterious side-project solo in a coffee shop",
		],
		next: [1, 8, 15],
	},
	{
		title: "Hackathon Hijinks",
		img: "hackathon.png",
		text: "You squeeze into a table with strangers, a stack of pizza slices, and one pedantic whiteboard.",
		options: [
			"Pair up with the person drawing a neural-network that looks like a raccoon",
			'Sneak into the "legacy systems" table to fix weird old code nobody dares touch',
		],
		next: [2, 5],
	},
	{
		title: "Raccoon Net",
		img: "",
		text: "They want to train a model that predicts the exact moment a professor will cancel class.",
		options: [
			"Suggest a UI and handle front-end",
			"Suggest a dataset from campus tweets and be the data wrangler",
		],
		next: [3, 4],
	},
	{
		text: 'Your UI is slick. Judges love the demo. You win "Most Likely to Be Hired." You also accidentally left a "demo key" in the JS console — a recruiter emails asking to "take the repo private" (awkward entry-level adulting). Happy ending with a comic footnote: you now own three internships and one suspicious LinkedIn message.',
	},
	{
		text: 'The dataset includes an overexcited late-night tweet about a robot professor cosplay. The model learns sarcasm as "cancel class" and predicts a campus-wide blackout the next week. You deploy a notification bot; it sends a mass alert: "URGENT: CANCELLED." Chaos ensues. Security chases you because the bot used the president\'s voice as a demo. You learn two lessons: sanitize data, and don\'t give your bot a dramatic radio voice. Outcome: expelled from the hackathon and immortalized on campus memes — you laugh, you cry.',
	},
	{
		title: "Legacy Code Dungeon",
		img: "old.png",
		text: "You open an ancient repo where comments are emojis and one file is called final_final_v3_reallyFINAL.py.",
		options: [
			"Refactor boldly and submit a pull request.",
			"Create a compatibility shim and ship the minimal patch.",
		],
		next: [6, 7],
	},
	{
		text: 'Your refactor improves runtime complexity but breaks an old script that powers the campus coffee machines. At 9am, coffee machines everywhere produce bubble tea. Students form a line chanting "algorithmic tapioca." Administration is unamused. You get a stern email and a ceremonial apology to the vending machines. You become folklore. Funny, humiliating, dramatic.',
	},
	{
		text: 'Your shim works. The room applauds. You\'re offered a part-time gig maintaining "the spaghetti." It\'s boring, but pays. You tell your future self, "This is where the real debugging starts."',
	},
	{
		title: "The LinkedIn Scroll",
		img: "doom.png",
		text: 'You click "Easy Apply" and three tabs open like a hydra. Two choices:',
		options: [
			"Tailor one killer message and apply to a startup.",
			"Mass-apply to everywhere with the same cover letter.",
		],
		next: [9, 12],
	},
	{
		title: "The Tailor-made Message",
		text: "You research the startup and find their product uses the same weird library you love. You ping a founder with a meme and a short project link. The founder could either:",
		choose: "random",
		options: [
			"Reply with an invitation to a tech chat, so you prepare a demo.",
			"Ghost you because your meme was from 2016.",
		],
		next: [10, 11],
	},
	{
		text: "Your demo is crisp, you laugh about legacy dependencies together, and the founder hires you as an intern. The twist: their office is a converted arcade and your job includes QA via Street Fighter tournaments. Delightful, ridiculous win.",
	},
	{
		text: 'They ghosted you and reposted your meme without credit. Except they tagged you @USER — not because they liked it — but to ask if you can fix their broken CI pipeline. You end up "consulting" for free and learning CI more than you wanted. Not glamorous, but you acquire a life skill and a passive-aggressive LinkedIn endorsement.',
	},
	{
		title: "The Spray-and-Pray Approach",
		text: 'Your 30 applications get 12 auto-replies and 1 odd calendar invite for "An experimental interview."',
		options: ["Accept the invite", "Ignore it — obviously spam."],
		next: [13, 14],
	},
	{
		text: 'You show up to a Zoom where the interviewer is a robot built for UI tests. The robot asks you to debug human feelings in 10 minutes. You give an honest answer and the robot loops, then files a bug on \"humanity.js\". The company shuts down for a week to "rethink onboarding." You get a weird reference that reads like poetry. It\'s a hilarious disaster.',
	},
	{
		text: "You ignore spam and get a real call later — from a cafe owner who needs a point-of-sale fix. You fix it and they give you free coffee for a semester. Practical and surprisingly satisfying.",
	},
	{
		title: "Side-Project Shenanigans",
		text: 'You sit in a coffee shop with artisanal Wi-Fi and a dream. Your idea: "an app to help students avoid group projects."',
		options: [
			"Build the MVP in one night and launch.",
			"Prototype with a friend and seek funding.",
		],
		next: [16, 19],
	},
	{
		title: "One-Night MVP",
		text: "Midnight, redbull, and duct-taped CSS. You press deploy. The app goes viral in a local Discord.",
		options: [
			"Celebrate and scale quick.",
			"Sleep, then evaluate feedback rationally.",
		],
		next: [17, 18],
	},
	{
		text: 'You scale too fast. Your app\'s "avoid group project" algorithm accidentally assigns everyone to the same quiet library corner. A student mob forms. A viral video shows hundreds of students shuffling to the same table like migrating penguins. You\'re featured in a "when tech meets chaos" vlog. Investors want to talk. You feel guilty but also rich-ish. Comedy + moral dilemma = classic tech origin story.',
	},
	{
		text: "You sleep. Woke up to polite emails, helpful bug reports, and one offer to feature your app in the campus newsletter. Slow and sustainable growth. You earn respect and a steady user base.",
	},
	{
		title: "Friend + Funding",
		text: "Your friend is charming, a little dramatic, and insists a pitch deck is a performance piece.",
		options: [
			"Let them lead the pitch (performative; risky).",
			"Rehearse the pitch and sync expectations.",
		],
		next: [20, 21],
	},
	{
		text: 'They perform the pitch with interpretive dance and a PowerPoint with only memes. Investors laugh, one gives a small check because "this is absurd and honest." The product has money but no clear roadmap. You end up managing chaos and learning to run a company by committee — which is an adventure and a running punchline.',
	},
	{
		text: "Rehearsed pitch, clear roadmap, modest seed money. You and your friend learn to survive meetings and awkward mixers. Real work starts, with occasional memes preserved for morale.",
	},
]
