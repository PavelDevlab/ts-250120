class UIElement {
    animate(_options: IAnimateOptions,): void {

    }
}

interface IAnimateOptions {
    delay: number;
    easing: 'easy-in' | 'easy-out'
}


new UIElement().animate({delay: 1000, easing: 'easy-in'});

interface IFact {
    factId: number;
    users: string[];
    factValue: string
}

enum TooltipDirection {
    TOP,
    LEFT,
    BOTTOM,
    RIGHT
}

const uniqueValue = (): keyof typeof TooltipDirection=> {  // 'factId' |  'users' | 'factValue'
    return 'RIGHT'
};

const dataList: { action: string, data: IFact }[] = [];
dataList.map((item: { action: string, data: IFact }) => {
    if (item.data[uniqueValue()] === 2) {
        return item;
    }
    return item;
})
