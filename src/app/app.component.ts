import { Component } from '@angular/core';
import {AdvantagesItemType} from "./types/advantages-item.type";
import {GoodsItemType} from "./types/goods-item.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showPresent: boolean = true;
  public phone: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://instagram.com';
  public isMenuOpen: boolean = false;
  public advantagesItem: AdvantagesItemType[] = [
    {
      title: 'Лучшие продукты',
      description:'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description:'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description:'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description:'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];
  public goodsItem: GoodsItemType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
    },
  ];
  public inputValues = {
    good: '',
    name: '',
    phone:''
  }
  public scrollTo(target: HTMLElement): void {
    this.closeMenu();
    target.scrollIntoView({behavior: "smooth"});
  }
  public addToCard(good: GoodsItemType, target:HTMLElement):void {
    this.scrollTo(target);
    this.inputValues.good = good.title.toUpperCase();
  }
  public openMenu():void {
    this.isMenuOpen = true;
  }
  public closeMenu():void {
    this.isMenuOpen = false;
  }
}
