import { calculateAge } from './calculateAge';

describe('test si calculAge marche bien', () => {
    test("Renvoie l'âge correct quand l'anniversaire n'a pas encore eu lieu cette année", () => {
        const birthDate = new Date(new Date().getFullYear() - 20, 11, 31); // 31 décembre il y a 20 ans
        const expectedAge = 19;
        expect(calculateAge(birthDate)).toBe(expectedAge);
    });

    test("Renvoie l'âge correct quand la date de naissance est aujourd'hui", () => {
        const birthDate = new Date();
        const expectedAge = 0;
        expect(calculateAge(birthDate)).toBe(expectedAge);
    });

    test('Lance une erreur quand la date de naissance est une date future', () => {
        const birthDate = new Date(new Date().getFullYear() + 1, 0, 1); // 1er janvier de l'année prochaine
        expect(() => calculateAge(birthDate)).toThrow('La date de naissance est dans le futur !');
    });

    test("Renvoie l'âge correct quand la date de naissance est le 29 février d'une année bissextile", () => {
        const birthDate = new Date(2000, 1, 29); // 29 février 2000
        let expectedAge = new Date().getFullYear() - 2000;
        if (new Date().getMonth() < 1 || (new Date().getMonth() === 1 && new Date().getDate() < 29)) {
            expectedAge -= 1;
        }
        expect(calculateAge(birthDate)).toBe(expectedAge);
    });
});
