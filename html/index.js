class Dish{
    constructor(name, meat, vege, sauce, img){
        this.name=name;
        this.meat=meat;
        this.vege=vege;
        this.sauce=sauce;
        this.img=img;
    }
    getname(){
        return this.name;
    }
    getmeat(){
        return this.meat;
    }
    getvege(){
        return this.vege;
    }
    getsauce(){
        return this.sauce;
    }
    getimg(){
        return this.img;
    }
}
var table=[];
table.push(new Dish("Curry paste with chicken", "Chicken", "Pasta", "Curry", "dishes/CPK.png"));
table.push(new Dish("Tomato paste with chicken", "Chicken", "Pasta", "Tomatoe", "dishes/CPT.png"));
table.push(new Dish("Paste with mushrooms and chicken", "Chicken", "Pasta", "Cream", "dishes/CPC.png"));
table.push(new Dish("Chinese chicken noodles", "Chicken", "Pasta", "Soja", "dishes/CPS.png"));

table.push(new Dish("Butter chicken with rice", "Chicken", "Rice", "Curry", "dishes/CRK.png"));
table.push(new Dish("Butter chicken with rice", "Chicken", "Rice", "Tomatoe", "dishes/CRT.png"));
table.push(new Dish("Risotto with mushrooms and chicken", "Rice", "Pasta", "Cream", "dishes/CRC.png"));
table.push(new Dish("Chicken yakitori with rice", "Chicken", "Rice", "Soja", "dishes/CRS.png"));

table.push(new Dish("Cococut Curry chicken", "Chicken", "Vegetables", "Curry", "dishes/CVK.png"));
table.push(new Dish("Basquaise chicken", "Chicken", "Vegetables", "Tomatoe", "dishes/CVT.png"));
table.push(new Dish("Chicken with crema and red peper", "Chicken", "Vegetables", "Cream", "dishes/CVC.png"));
table.push(new Dish("Vegetables wok with chicken", "Chicken", "Vegetables", "Soja", "dishes/CVS.png"));

table.push(new Dish("Katsu curry chicken", "Chicken", "Potatoe", "Curry", "dishes/CTK.png"));
table.push(new Dish("Tomato potato chicken cutlet", "Chicken", "Potatoe", "Tomatoe", "dishes/CTT.png"));
table.push(new Dish("Chicken roast with potato", "Chicken", "Potatoe", "Cream", "dishes/CTC.png"));
table.push(new Dish("Chicken yakitori french fries", "Chicken", "Potatoe", "Soja", "dishes/CTS.png"));


table.push(new Dish("Bacon curry paste", "Pork", "Pasta", "Curry", "dishes/PPK.png"));
table.push(new Dish("Bacon tomato paste", "Pork", "Pasta", "Tomatoe", "dishes/PPT.png"));
table.push(new Dish("Carbonara", "Pork", "Pasta", "Cream", "dishes/PPC.png"));
table.push(new Dish("Pork ramen", "Pork", "Pasta", "Soja", "dishes/PPS.png"));

table.push(new Dish("Sauteed pork curry rice", "Pork", "Rice", "Curry", "dishes/PRK.png"));
table.push(new Dish("Red rice with chorizo and tomatoe sauce", "Pork", "Rice", "Tomatoe", "dishes/PRT.png"));
table.push(new Dish("Risotto with pork", "Pork", "Rice", "Cream", "dishes/PRC.png"));
table.push(new Dish("Fried rice with pork", "Pork", "Rice", "Soja", "dishes/PRS.png"));

table.push(new Dish("Quiche with bacon and curry sauce", "Pork", "Vegetables", "Curry", "dishes/PVK.png"));
table.push(new Dish("Tomato and bacon soup", "Pork", "Vegetables", "Tomatoe", "dishes/PVT.png"));
table.push(new Dish("Bacon zucchini quiche", "Pork", "Vegetables", "Cream", "dishes/PVC.png"));
table.push(new Dish("Vegetables wok with bacon", "Pork", "Vegetables", "Soja", "dishes/PVS.png"));

table.push(new Dish("Pork potato curry", "Pork", "Potatoe", "Curry", "dishes/PTK.png"));
table.push(new Dish("Stuffed tomato", "Pork", "Potatoe", "Tomatoe", "dishes/PTT.png"));
table.push(new Dish("Rosted porkwith potato", "Pork", "Potatoe", "Cream", "dishes/PTC.png"));
table.push(new Dish("Grilled pork and french fries", "Pork", "Potatoe", "Soja", "dishes/PTS.png"));


table.push(new Dish("Curry shrimp paste", "Shrimp", "Pasta", "Curry", "dishes/SPK.png"));
table.push(new Dish("Spaghetti tomato shrimp", "Shrimp", "Pasta", "Tomatoe", "dishes/SPT.png"));
table.push(new Dish("Creamy shrimp paste", "Shrimp", "Pasta", "Cream", "dishes/SPC.png"));
table.push(new Dish("Shrimp ramen", "Shrimp", "Pasta", "Soja", "dishes/SPS.png"));

table.push(new Dish("Paella", "Shrimp", "Rice", "Curry", "dishes/SRK.png"));
table.push(new Dish("Tom yum", "Shrimp", "Rice", "Tomatoe", "dishes/SRT.png"));
table.push(new Dish("Shrimp risotto", "Shrimp", "Rice", "Cream", "dishes/SRC.png"));
table.push(new Dish("Fried rice with shrimp", "Shrimp", "Rice", "Soja", "dishes/SRS.png"));

table.push(new Dish("Curry vegetable shrimp quiche", "Shrimp", "Vegetables", "Curry", "dishes/SVK.png"));
table.push(new Dish("Shrimp in vegetable tomato sauce", "Shrimp", "Vegetables", "Tomatoe", "dishes/SVT.png"));
table.push(new Dish("Caesar style shrimp salad", "Shrimp", "Vegetables", "Cream", "dishes/SVC.png"));
table.push(new Dish("Vegetables wok with shrimp", "Shrimp", "Vegetables", "Soja", "dishes/SVS.png"));

table.push(new Dish("Sweet potato shrimp curry", "Shrimp", "Potatoe", "Curry", "dishes/STK.png"));
table.push(new Dish("Shrimp tomatoe sauce and french frice", "Shrimp", "Potatoe", "Tomatoe", "dishes/STT.png"));
table.push(new Dish("Shrimp toast with french fries", "Shrimp", "Potatoe", "Cream", "dishes/STC.png"));
table.push(new Dish("Tempura shrimp wih chips", "Shrimp", "Potatoe", "Soja", "dishes/STS.png"));


table.push(new Dish("Curry paste with beef", "Beef", "Pasta", "Curry", "dishes/BPK.png"));
table.push(new Dish("Spaghetti bolognese", "Beef", "Pasta", "Tomatoe", "dishes/BPT.png"));
table.push(new Dish("Paste with beef and cream", "Beef", "Pasta", "Cream", "dishes/BPC.png"));
table.push(new Dish("Beef ramen", "Beef", "Pasta", "Soja", "dishes/BPS.png"));

table.push(new Dish("Curry beef and rice", "Beef", "Rice", "Curry", "dishes/BRK.png"));
table.push(new Dish("Lok lak Beef", "Beef", "Rice", "Tomatoe", "dishes/BRT.png"));
table.push(new Dish("Risotto beef", "Beef", "Rice", "Cream", "dishes/BRC.png"));
table.push(new Dish("Fried rice beef", "Beef", "Rice", "Soja", "dishes/BRS.png"));

table.push(new Dish("Curry samossa beef", "Beef", "Vegetables", "Curry", "dishes/BVK.png"));
table.push(new Dish("Beef fajitas", "Beef", "Vegetables", "Tomatoe", "dishes/BVT.png"));
table.push(new Dish("Stroganoff beef", "Beef", "Vegetables", "Cream", "dishes/BVC.png"));
table.push(new Dish("Vegetables wok with beef", "Beef", "Vegetables", "Soja", "dishes/BVS.png"));

table.push(new Dish("Massaman curry beef", "Beef", "Potatoe", "Curry", "dishes/BTK.png"));
table.push(new Dish("Bourgignon beef", "Beef", "Potatoe", "CreaTomatoem", "dishes/BTT.png"));
table.push(new Dish("Grilled beef and potatoes", "Beef", "Potatoe", "Cream", "dishes/BTC.png"));
table.push(new Dish("Beef Yakitori and french fries", "Beef", "Potatoe", "Soja", "dishes/BTS.png"));

localStorage.setItem('dish',JSON.stringify(table));



