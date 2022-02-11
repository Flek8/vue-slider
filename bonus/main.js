const vue = new Vue (
    {
        el:'#app',
        data:{
            items: [
                {
                    photo: '../img/01.jpg',
                    title: "Svezia",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
                },
                {
                    photo: '../img/02.jpg',
                    title: "Svizzera",
                    text: "Lorem ipsum."
                },
                {
                    photo: '../img/03.jpg',
                    title: "Gran Bretagna",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    photo: '../img/04.jpg',
                    title: "Germania",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                },
                {
                    photo: '../img/05.jpg',
                    title: "Paradise",
                    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                }
            ],
            active: 0,
        },
        methods:{

            prev() {

                if (this.active == 0) {
                    this.active = this.items.length -1;
                } else {
                    this.active--;
                }

            },
            next() {
                
                if (this.active == this.items.length - 1) {
                    this.active = 0;
                } else {
                    this.active++;
                }
            },
            clickImg(index) {
                this.active = index;
            },
            autoPlay() {
                this.play = setInterval(this.next, 3000);
            },
            stopAutoPlay() {
                clearInterval(this.play);
            }
            
        },
        beforeMount() {
            this.autoPlay();
        }       
    }
)
