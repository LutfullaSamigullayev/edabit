const flip = require('./code'); // Asosiy kodni import qilish

describe('Tests', () => {
    test('the tests', () => {
        const str1 = "There's never enough time to do all the nothing you want";
        const str2 = "I have all these great genes but they're recessive";
        const str3 = "I like maxims that don't encourage behavior modification";

        expect(flip('Hello', 'word')).toEqual('olleH');
        expect(flip('Hello', 'sentence')).toEqual('Hello');
        expect(flip(str1, 'word')).toEqual("s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw");
        expect(flip(str1, 'sentence')).toEqual("want you nothing the all do to time enough never There's");
        expect(flip(str2, 'word')).toEqual("I evah lla eseht taerg seneg tub er'yeht evissecer");
        expect(flip(str2, 'sentence')).toEqual("recessive they're but genes great these all have I");
        expect(flip(str3, 'word')).toEqual("I ekil smixam taht t'nod egaruocne roivaheb noitacifidom");
        expect(flip(str3, 'sentence')).toEqual("modification behavior encourage don't that maxims like I");
    });
});
