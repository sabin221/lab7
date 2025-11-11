// js/script.js


function schimbaViata() {
    // 1. Modificarea Numele cu Funcția / Poziția visată
    const numeElement = document.getElementById('nume-curent');
    if (numeElement) {
        numeElement.innerHTML = '✨ Arhitect de Sisteme <span style="color: #2ecc71;">(Microsoft)</span>';
        numeElement.style.fontSize = '2.5em';
    }

    // 2. Modificarea conținutului din secțiunea Descriere
    const descriereTextElement = document.getElementById('descriere-text');
    if (descriereTextElement) {
        descriereTextElement.innerHTML = 'Am absolvit facultatea cu **Magna Cum Laude**, obținând certificări în Cloud Computing (AWS/Azure) și am contribuit la două proiecte Open Source majore. Experiența mea ideală!';
    }
    
    // Modificarea listei de domenii
    const domeniiListaElement = document.getElementById('domeniilista');
    if (domeniiListaElement) {
        domeniiListaElement.innerHTML = `
            <h2>Domenii Stăpânite</h2>
            <ul>
                <li>🤖 Inteligență Artificială</li>
                <li>☁️ Cloud Computing & DevOps</li>
                <li>🛡️ Securitate Cibernetică Avansată</li>
            </ul>
        `;
    }

    // 3. Modificarea imaginii de profil
    const imagineElement = document.getElementById('profil-img');
    if (imagineElement) {
        // Asigurați-vă că 'alternativa.jpg' este în directorul rădăcină!
        imagineElement.src = 'alternativa.jpg'; 
        imagineElement.alt = 'Poza Alternativa de Profil';
    }

    // 4. Modificarea stilului paginii (Fundal, Fonturi)
    const body = document.body;
    body.style.backgroundColor = '#34495e'; // Fundal Navy Blue închis
    body.style.color = '#ecf0f1'; // Font alb-deschis
    
    // Modifică fundalul secțiunilor
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = '#2c3e50'; 
        section.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
    });
    
    // Modifică titlurile H2
    const titluri = document.querySelectorAll('h2');
    titluri.forEach(h2 => {
        h2.style.color = '#3498db'; 
        h2.style.borderBottom = '2px solid #3498db';
    });

    // 5. Modificarea stilurilor imaginii de profil
    if (imagineElement) {
        imagineElement.style.opacity = '1.0'; // Opacitate completă
        imagineElement.style.border = '10px solid #2ecc71'; // Margine groasă și verde
        imagineElement.style.filter = 'grayscale(50%)'; 
        imagineElement.style.transition = 'none'; 
    }
}