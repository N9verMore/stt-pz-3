/* eslint-env jest */

const apiIceAndFire = require('./anapioficeandfire')

jest.mock('./anapioficeandfire', () => {
    const originalModule = jest.requireActual('./anapioficeandfire');
    const resp = require('../__mocksData__/api.json')
    return {
        __esModule: true,
        ...originalModule,
        getListOfRestEndPoint: function () {
            return new Promise((resolve, reject) => {
                resolve({entity: resp})
            })
        },
        getHouses: function () {
            return new Promise((resolve, reject) => {
                resolve({entity: resp.housesList})
            })
        },
        getHouseAllyrion: function () {
            return new Promise((resolve, reject) => {
                resolve({entity: resp.houseAllyrion})
            })
        },
    };
});


describe('#getBooks() using Promises', () => {
    it('should load books data', () => {
        apiIceAndFire.getListOfRestEndPoint()
            .then(data => {
                expect(data.entity.books).toBeDefined()
                expect(data.entity.books).toEqual('https://www.anapioficeandfire.com/api/books')
                expect(data.entity.houses).toBeDefined()
                expect(data.entity.houses).toEqual('https://www.anapioficeandfire.com/api/houses')
            })
    })
})

describe('#getBook3() using Promises', () => {
    it('should load book3 data', () => {
        apiIceAndFire.getListOfRestEndPoint().then(data => {
            expect(data.entity.book3).toBeDefined()
            expect(data.entity.book3).toEqual('https://www.anapioficeandfire.com/api/books/3')
        })
    })
})

describe('#getHouses() using Promises', () => {
    it('should load houses data', () => {
        return apiIceAndFire.getHouses().then(data => {
            expect(data.entity).toBeDefined()
            expect(Array.isArray(data.entity)).toBe(true)
            expect(data.entity.length).toBeGreaterThan(0)
            expect(data.entity[0].name).toBeDefined()
        })
    })
})

describe('#getHouseAllyrion() using Promises', () => {
    it('should load House Allyrion of Godsgrace data', () => {
        return apiIceAndFire.getHouseAllyrion().then(data => {
            expect(data.entity).toBeDefined()
            expect(data.entity.name).toEqual('House Allyrion of Godsgrace')
            expect(data.entity.region).toEqual('Dorne')
            expect(data.entity.words).toEqual('No Foe May Pass')
            expect(data.entity.seats).toContain('Godsgrace')
        })
    })
})
