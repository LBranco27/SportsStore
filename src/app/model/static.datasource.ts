import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Bicicleta Motorizada", "Ciclismo", "Provavelmente não é permitida em campeonatos, não vendemos com combustível.","assets/img/1.jpg", 1750),
        new Product(2, "Pneu Duvidoso", "Ciclismo", "Não sabemos como foi parar no estoque.","assets/img/2.jpg", 90),
        new Product(3, "Buzina Irritante", "Ciclismo", "Ótima para desestabilizar psicologicamente seus oponentes, não nos responsabilizamos por qualquer desclassificação.","assets/img/3.jpg", 45),
        new Product(4, "Suporte para Carregar Bicicletas", "Ciclismo", "Para quem não gosta de pedalar.","assets/img/4.jpg", 60),
        new Product(5, "Pneu Quadrado", "Ciclismo", "Para quem curte desafios.","assets/img/5.jpg", 240),
        new Product(6, "Xadrez Do Turco", "Xadrez", "Ninguém para jogar com você? sem problemas! jogue contra O Turco.","assets/img/6.jpg", 4000),
        new Product(7, "Luva-Xadrez", "Xadrez", "Você não precisa mais se preocupar em perder partidas, equipe a Luva-Xadrez e ela jogará por você.","assets/img/7.jpg", 250),
        new Product(8, "Xadrez Amaldiçoado", "Xadrez", "Não jogue nesse tabuleiro, não nos responsabilizamos por lesões, agressões ou mortes relacionadas ao produto.","assets/img/8.jpg", 385),
        new Product(9, "Peça Aleatória", "Xadrez", "1 peça de xadrez aleatória.","assets/img/9.jpg", 20),
        new Product(10, "Tabuleiro Normal C/ Peças", "Xadrez", "Esperamos que esse produto seja normal.","assets/img/10.jpg", 150),
        new Product(11, "Taco Gigante", "Baseball", "Quase impossível de errar a bola da baseball!","assets/img/11.jpg", 95),
        new Product(12, "Bola Minúscula", "Baseball", "Quase impossível de acertar!","assets/img/12.jpg", 10),
        new Product(13, "Carro de Baseball", "Baseball", "Para quem tem preguiça de correr atrás da bola.","assets/img/13.jpg", 7500),
        new Product(14, "Robô de Baseball", "Baseball", "Para os jogadores solitários.","assets/img/14.jpg", 27500),
        new Product(15, "Estádio de Baseball", "Baseball", "Não efetuamos entrega desse produto.","assets/img/15.jpg", 2500000),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
