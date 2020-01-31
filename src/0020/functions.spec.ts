import { average } from "./functions";

describe('Functions tests', () => {
    it('average should calc', () => {
        expect(average(1, 2, 3)).toEqual(`Average is 2`);
        expect(average('2', 2)).toEqual(`Average is 2`);
        expect(average(2, '2')).toEqual(`Average is 2`);
        expect(average(2, '2asda')).toEqual(`Average is 2`);
        expect(average('asd2', 2)).toEqual(`Average is 1`);
    })
});
