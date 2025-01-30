const questions = [
    {
        Question: "I've been experiencing frequent headaches. Could it be due to stress or something serious?",
        Answers: [
            {
                text: "Frequent headaches can be caused by stress, dehydration, lack of sleep, or even eye strain. However, if they persist or are accompanied by other symptoms like nausea or vision issues, I recommend consulting a neurologist.",
                userBy: "Dr. Amit Verma (Neurologist)",
            },
            {
                text: "Try maintaining a sleep schedule and staying hydrated. If headaches continue, consult a specialist.",
                userBy: "Dr. Pooja Malhotra (General Physician)",
            }
        ],
        QuestionBy: "Rahul Sharma",
        Date: "2024-02-15",
    },
    {
        Question: "What are some natural ways to boost immunity?",
        Answers: [
            {
                text: "A balanced diet rich in vitamin C, regular exercise, proper sleep, and staying hydrated can boost immunity. You may also consider supplements like zinc and probiotics under medical guidance.",
                userBy: "Dr. Priya Mehta (Immunologist)",
            },
            {
                text: "Green leafy vegetables, turmeric, and ginger are also great natural immunity boosters.",
                userBy: "Dr. Ramesh Iyer (Nutritionist)",
            }
        ],
        QuestionBy: "Neha Kapoor",
        Date: "2024-03-10",
    },
    {
        Question: "I have been feeling dizzy and fatigued for the past week. Should I be worried?",
        Answers: [
            {
                text: "Dizziness and fatigue could be due to dehydration, low blood sugar, or vitamin deficiencies. However, if it persists, getting a blood test to check for anemia, thyroid issues, or infections is advisable.",
                userBy: "Dr. Rajesh Nair (General Physician)",
            },
            {
                text: "Make sure you're eating properly and staying hydrated. Also, check your blood pressure levels.",
                userBy: "Dr. Sneha Kapoor (Endocrinologist)",
            }
        ],
        QuestionBy: "Vikram Singh",
        Date: "2024-04-05",
    },
    {
        Question: "How can I manage my blood pressure naturally?",
        Answers: [
            {
                text: "Regular exercise, a low-sodium diet, stress management, and avoiding processed foods can help manage blood pressure. Reducing caffeine and alcohol intake is also beneficial.",
                userBy: "Dr. Anjali Deshmukh (Cardiologist)",
            },
            {
                text: "You can also try deep breathing exercises and yoga to control stress levels, which impact blood pressure.",
                userBy: "Dr. Suresh Patel (Physiotherapist)",
            }
        ],
        QuestionBy: "Arun Patel",
        Date: "2024-05-20",
    },
    {
        Question: "Is intermittent fasting safe for diabetic patients?",
        Answers: [
            {
                text: "Intermittent fasting can be beneficial for weight control, but for diabetics, it should be done under medical supervision as it may cause blood sugar fluctuations.",
                userBy: "Dr. Sameer Rao (Endocrinologist)",
            },
            {
                text: "If you have diabetes, it's best to consult your doctor before trying intermittent fasting. Avoid long fasting periods to prevent hypoglycemia.",
                userBy: "Dr. Anjali Menon (Diabetologist)",
            }
        ],
        QuestionBy: "Sunita Yadav",
        Date: "2024-06-12",
    },
];

const thoughts = [
    {
        id: 1,
        text: "Health is not valued till sickness comes. Take care of yourself!",
        userBy: "Dr. Amit Verma (Neurologist)",
        likes: 12,
        comments: [
            { user: "Rahul Sharma", text: "Very true, doctor!" },
            { user: "Neha Kapoor", text: "Thanks for sharing!" }
        ],
        date: "2024-02-15",
    },
    {
        id: 2,
        text: "A balanced diet is a doctor in itself. Eat wisely, stay healthy.",
        userBy: "Dr. Priya Mehta (Nutritionist)",
        likes: 8,
        comments: [
            { user: "Vikram Singh", text: "Such a great reminder!" }
        ],
        date: "2024-03-10",
    },
];

export {thoughts,questions};
