import fareCalculator from "./fareCalculator";


describe('fareCalculator tests', () => {
    test('bad input (no distance) should return 0', () => {
       expect(fareCalculator(
           "2020-06-19T13:01:17.031Z",
           0,
           )).toBe(0);

       expect(fareCalculator(
           "",
           6,
           )).toBe(0);
    });
    test('no additional fee',() => {
        expect(fareCalculator(
            "2020-06-19T13:01:17.031Z",
            2,
        )).toBe(6);

        expect(fareCalculator(
            "2020-06-19T13:01:17.031Z",
            4.65,
        )).toBe(13);
    });
    test('additional fees between 4PM and 7PM', () => {
        expect(fareCalculator(
            "2020-06-19T17:01:17.031Z",
            4.65,
            )).toBe(14);

        expect(fareCalculator(
            "2020-06-19T16:11:17.031Z",
            5,
            )).toBe(14.5);
    });
    test('additional fees between 8PM and 6AM',() => {
        expect(fareCalculator(
            "2020-06-19T04:01:17.031Z",
            2,
        )).toBe(6.5);
        expect(fareCalculator(
            "2020-06-19T22:01:17.031Z",
            1,
        )).toBe(4);
    });
});