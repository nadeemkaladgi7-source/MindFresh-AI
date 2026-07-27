function showMood(mood){

const result=document.getElementById("result");

if(mood==="happy"){

result.innerHTML=`
<h2>😊 Happy Mood</h2>

<p>Awesome! Keep smiling.</p>

<ul>
<li>🎵 Listen to Happy Music</li>
<li>🎮 Play Brain Games</li>
<li>🌞 Enjoy your day</li>
<li>💧 Drink Water</li>
</ul>
`;

}

else if(mood==="sad"){

result.innerHTML=`
<h2>😔 Sad Mood</h2>

<p>Everything will be okay ❤️</p>

<ul>
<li>🌧️ Listen to Rain Sounds</li>
<li>🫁 Deep Breathing</li>
<li>🤖 Talk with AI Assistant</li>
<li>📖 Read Motivation</li>
</ul>
`;

}

else if(mood==="stress"){

result.innerHTML=`
<h2>😰 Stressed</h2>

<p>Relax yourself.</p>

<ul>
<li>🌿 Nature Sounds</li>
<li>🧘 Meditation</li>
<li>🎵 Calm Music</li>
<li>🎮 Relaxing Game</li>
</ul>
`;

}

else if(mood==="angry"){

result.innerHTML=`
<h2>😡 Angry</h2>

<p>Take a deep breath.</p>

<ul>
<li>🫁 Breathing Exercise</li>
<li>🌊 Ocean Sounds</li>
<li>🧘 Meditation</li>
<li>🤖 AI Support</li>
</ul>
`;

}

else if(mood==="tired"){

result.innerHTML=`
<h2>😴 Tired</h2>

<p>You need some rest.</p>

<ul>
<li>☕ Take a Break</li>
<li>💧 Drink Water</li>
<li>🎵 Soft Music</li>
<li>😴 Power Nap</li>
</ul>
`;

}

else if(mood==="relax"){

result.innerHTML=`
<h2>😌 Relaxed</h2>

<p>Maintain your peace.</p>

<ul>
<li>🌿 Nature Walk</li>
<li>📖 Journal Writing</li>
<li>🎵 Soft Music</li>
<li>🎯 Set New Goals</li>
</ul>
`;

}

else if(mood==="excited"){

result.innerHTML=`
<h2>🤩 Excited</h2>

<p>Enjoy your happiness.</p>

<ul>
<li>🎉 Celebrate</li>
<li>📸 Capture Memories</li>
<li>🎵 Party Playlist</li>
<li>🎯 Start Something New</li>
</ul>
`;

}

else{

result.innerHTML=`
<h2>🥺 Lonely</h2>

<p>You are never alone.</p>

<ul>
<li>🤖 Talk with AI</li>
<li>📞 Call a Friend</li>
<li>🎵 Relax Music</li>
<li>💙 Positive Quotes</li>
</ul>
`;

}

}

