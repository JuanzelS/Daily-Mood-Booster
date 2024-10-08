function calculateActivity() {
    console.log("calculateActivity function is called");

    // Get the selected mood, time, and activity type
    const mood = document.getElementById('mood').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity-type').value;

    // Ensure the time is a positive number
    if (!time || time <= 0) {
        document.getElementById('result').innerText = "Please enter a valid time.";
        return;
    }

    // Define mood-boosting activity suggestions
    const activitySuggestions = {
        happy: {
            mental: [
                "Read a chapter of an inspiring book",
                "Solve a puzzle or Sudoku",
                "Learn a new skill online"
            ],
            physical: [
                "Go for a quick jog",
                "Do a short workout",
                "Dance to your favorite song"
            ],
            social: [
                "Call a friend to share your happiness",
                "Plan a fun outing with someone",
                "Send a positive message to a loved one"
            ]
        },
        sad: {
            mental: [
                "Journal your thoughts to express your feelings",
                "Do a mindfulness meditation",
                "Listen to calming music while reading"
            ],
            physical: [
                "Take a gentle walk outside",
                "Do some stretching exercises",
                "Try yoga to relax your mind and body"
            ],
            social: [
                "Call a supportive friend",
                "Reach out to someone you trust",
                "Share your feelings with someone close"
            ]
        },
        stressed: {
            mental: [
                "Try a guided meditation for relaxation",
                "Practice deep breathing exercises",
                "Write down your thoughts to clear your mind"
            ],
            physical: [
                "Do a quick cardio workout to release tension",
                "Take a power walk to get some fresh air",
                "Do some light yoga or stretching"
            ],
            social: [
                "Talk to a friend who can help you unwind",
                "Plan a low-key gathering with someone close",
                "Take a break and chat with someone supportive"
            ]
        },
        tired: {
            mental: [
                "Listen to calming music and rest your mind",
                "Do some light reading to relax",
                "Practice a short mindfulness exercise"
            ],
            physical: [
                "Do gentle stretching to relieve tension",
                "Take a short nap to recharge",
                "Go for a slow, relaxing walk"
            ],
            social: [
                "Call a friend for a low-energy conversation",
                "Catch up with someone close in a calm setting",
                "Spend some quiet time with a loved one"
            ]
        }
    };

    // Select a suggestion based on time and activity type
    let selectedSuggestion = "";

    if (time <= 15) {
        selectedSuggestion = activitySuggestions[mood][activity][0]; // Short activity
    } else if (time > 15 && time <= 30) {
        selectedSuggestion = activitySuggestions[mood][activity][1]; // Medium activity
    } else {
        selectedSuggestion = activitySuggestions[mood][activity][2]; // Long activity
    }

    // Create a result message based on mood, time, and activity
    const resultMessage = `You're feeling ${mood}, and you have ${time} minutes to do a ${activity} activity. Here's a suggestion: ${selectedSuggestion}`;

    // Display the result in the 'result' element
    document.getElementById('result').innerText = resultMessage;}