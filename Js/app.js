class App {
    constructor(){
        this.spaceship = null
    }

    start() {
        this.enrollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu ()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
     }

    enrollSpaceship(){
        let spaceshipName = prompt("Qual o nome da nave?")
        let crewQuantity = prompt("QUal a quantidade de tripulantes?")
        let spaceshipKind = this. askForSpaceshipKind ()
        if (spaceshipKind == "1") {
            let weaponsQuantity = prompt("Quantas armas a nave possui?")
            this.spaceship = new BatleSpaceship (spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("Quantos lugares a nave possui?")
            this.spaceship = new TransportSpaceship (spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKind(){
        let chosenOption
        while(!["1","2"].includes(chosenOption)) {
            chosenOption = prompt("Qual o tipo de nave?\n1 - Batalha\n2 - Transporte")
        }
        return chosenOption
    }
    showInitialMenu () {
        const promptMessage = " O que você deseja fazer?\n" +
                              " 1 - Acelerar a nave\n" +
                              " 2 - Trocar a nave\n" +
                              " 3 - Imprimir e sair"
        let chosenOption = prompt(promptMessage)
        while(!["1","2","3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }
    
    redirectFeature(chosenOption){
        switch(chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("Quanto você quer acelerar?"))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMessage = "Nome: " + this.spaceship.name + "\n" +
                           "Quantidade de tripulantes: " + this.spaceship.crewQuantity + "\n" +
                           "Velocidade atual: " + this.spaceship.currentVelocity + "\n"
        alert(finalMessage)
    }

}