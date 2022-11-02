import Builder from "./example/builder"
import Mouse from "./example/Mouse"

document.addEventListener('DOMContentLoaded', ()=>{

    new Builder(document.querySelectorAll('.examples > img')[1])
    Mouse.bind()

})

export default class Blob {
    constructor(container) {
        this.container = container
        this.build()

        this.draw()
    }

    build(){
        this.c = document.createElement('canvas')
        this.container.appendChild(this.c)
        const rect = this.c.getBoundingClientRect()
        this.c.width = rect.width
        this.c.height = rect.height
        this.ctx = this.c.getContext('2d')

        this.hiddenCanvas = document.createElement('canvas')
        this.hiddenCtx = this.hiddenCanvas.getContext('2d')
        this.hiddenCanvas.width = this.c.width
        this.hiddenCanvas.height = this.c.height

        let size = 0.5
        this.circles = Array(20).fill({}).map(c => ({
            x: Math.random() * this.c.width,
            y: Math.random() * this.c.height,
            speedX: (Math.random() * 2 - 1) * 0.2,
            speedY: (Math.random() * 2 - 1) * 0.2,
            size: (this.c.width / 5 * Math.random() + this.c.width / 10) * size,
            color: `hsl(${Math.random()*100+120}deg, 70%, 70%)`
        }))
        this.ctx.fillStyle = "red"
        this.loop()
    }

    clear(){
        this.hiddenCtx.clearRect(0, 0, this.c.width, this.c.height)
        this.ctx.clearRect(0, 0, this.c.width, this.c.height)
    }

    draw(){
        this.clear()

        this.circles.map(c => {
            if(c.x < 0 || c.x > this.c.width) c.speedX = -c.speedX
            if(c.y < 0 || c.y > this.c.height) c.speedY = -c.speedY

            c.x += c.speedX
            c.y += c.speedY
            this.drawCircle(c.x,c.y, c.size, c.color)
        })

        this.ctx.drawImage(this.hiddenCanvas, 0, 0, this.c.width, this.c.height)
    }

    loop(){
        this.draw()
        requestAnimationFrame(this.loop.bind(this))
    }

    drawCircle(x, y, radius=50, color="red"){
        this.hiddenCtx.fillStyle = color
        this.hiddenCtx.beginPath()
        this.hiddenCtx.arc(x, y, radius, 0, 2*Math.PI)
        this.hiddenCtx.fill()
    }
}