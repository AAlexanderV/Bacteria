будет класс Бактерия с такими данными:

-   position { x, y }
-   foodLeft
-   foodToDevide = inherit + random?
-   ID ?
-   speed = inherit + random?
-   foodConsumption = speed \* consumtionCoefficient?
-   color = speed?

    Methods:

-   findFood()
-   countStep()
-   move()
-   makeStep()

-   eat()
-   die()

<!-- -   createNewBacteria() -->

store{
foodChanceToAppear,
foodOnField = [{x,y,ID},{x,y,ID},{x,y,ID}...], (сортировать по х?)

<!-- bacterias = [{x,y,ID},{x,y,ID},{x,y,ID}...], -->

bacterias = []
}

Buttons - start, stop, clear
Range for foodChanceToAppear

Required inputs for initial parameters:

-   foodToDevide
-   speed
-   consumtionCoefficient
