function Card(name, price){
    this.name = name;
    this.price = price;

    this.penalty = price * 0.1;
    this.owner = null;
}