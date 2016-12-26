define(function(){
    return function Card(name, price){
        this.name = name;
        this.price = price;

        this.penalty = price * 0.1;
        this.owner = null;

        this.render = function(){
            return `
             <div class="card">
                <div class="name">
                    ${this.name}
                    <span class="owner">
                        ${this.owner.getName()}
                    </span>
                </div>
                <div>
                    <span class="price">${this.price}</span>
                    /
                    <span class="penalty">${this.penalty}</span>
                </div>
            </div>
        `;
        }
    };
});