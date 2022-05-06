const template = document.createElement("template");

template.innerHTML = `
    <nav id="nav">
        <ul class="links">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="recruitment.html">Join</a></li>
        </ul>
        <ul class="icons">
            <li><a href="https://www.facebook.com/cornellsportsanalytics/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/company/cornellsportsanalytics/" class="icon brands alt fa-linkedin"><span class="label">Linkedin</span></a></li>
            <li><a href="https://www.instagram.com/cornellsportsanalytics/" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
        </ul>
    </nav>
`;

class Menu extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {
		console.log("connected callback");
		this.render();
	}

	render() {
		this.nav;
	}
}

window.customElements.define("page-menu", Menu);
