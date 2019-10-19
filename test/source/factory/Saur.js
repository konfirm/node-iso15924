/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Saur - Saurashtra', () => {
		const saur = factory('Saur');

		it('instances are singletons', (next) => {
			const singleton = factory('Saur');
			const upper = factory('SAUR');
			const lower = factory('saur');
			const code = factory.code('Saur');
			const numeric = factory.numeric('344');
			const number = factory.numeric(344);
			const instance = new ISO15924('Saur', '344');

			expect(singleton).to.shallow.equal(saur);
			expect(upper).to.shallow.equal(saur);
			expect(lower).to.shallow.equal(saur);
			expect(code).to.shallow.equal(saur);
			expect(numeric).to.shallow.equal(saur);
			expect(number).to.shallow.equal(saur);
			expect(instance).not.to.shallow.equal(saur);
			expect(instance.code).to.equal(saur.code);
			expect(instance.numeric).to.equal(saur.numeric);

			next();
		});

		it('has code "Saur"', (next) => {
			expect(saur.code).to.equal('Saur');

			next();
		});

		it('has numeric "344"', (next) => {
			expect(saur.numeric).to.equal('344');

			next();
		});

		it('implements toString', (next) => {
			expect(saur.toString).to.be.function();
			expect(saur.toString()).to.equal('Saur');
			expect(String(saur)).to.equal('Saur');
			expect(0 + saur).to.equal('0Saur');
			expect('code:' + saur).to.equal('code:Saur');

			next();
		});

		it('implements toJSON', (next) => {
			expect(saur.toJSON).to.be.function();
			expect(saur.toJSON()).to.equal('Saur');
			expect(JSON.stringify(saur)).to.equal('"Saur"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(saur.valueOf).to.be.function();
			expect(saur.valueOf()).to.equal(344);
			expect(Number(saur)).to.equal(344);
			expect(+saur).to.equal(344);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(saur.valueOf).to.be.function();
			expect(saur.valueOf()).to.equal(344);
			expect(Number(saur)).to.equal(344);
			expect(+saur).to.equal(344);

			expect(0 + saur).to.equal('0Saur');
			expect(String(saur)).to.equal('Saur');

			next();
		});
	});
});
