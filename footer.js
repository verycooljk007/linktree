class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    margin-top: 2.5rem;
                    text-align: center;
                    font-size: 0.625rem;
                    color: #666;
                    border-top: 1px solid #333;
                    padding-top: 0.625rem;
                    font-family: 'Courier New', Courier, monospace;
                }
            </style>
            <div class="footer">
                <p>:: CASTLEMORE ROAD STRATEGIES © ${new Date().getFullYear()} :: TORONTO, ON ::</p>
                <p>DATA DELAYED 15 MIN</p>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
