/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Geor - Georgian (Mkhedruli and Mtavruli)', () => {
		const geor = factory('Geor');

		it('instances are singletons', (next) => {
			const singleton = factory('Geor');
			const upper = factory('GEOR');
			const lower = factory('geor');
			const code = factory.code('Geor');
			const numeric = factory.numeric('240');
			const number = factory.numeric(240);
			const instance = new ISO15924('Geor', '240');

			expect(singleton).to.shallow.equal(geor);
			expect(upper).to.shallow.equal(geor);
			expect(lower).to.shallow.equal(geor);
			expect(code).to.shallow.equal(geor);
			expect(numeric).to.shallow.equal(geor);
			expect(number).to.shallow.equal(geor);
			expect(instance).not.to.shallow.equal(geor);
			expect(instance.code).to.equal(geor.code);
			expect(instance.numeric).to.equal(geor.numeric);

			next();
		});

		it('has code "Geor"', (next) => {
			expect(geor.code).to.equal('Geor');

			next();
		});

		it('has numeric "240"', (next) => {
			expect(geor.numeric).to.equal('240');

			next();
		});

		it('implements toString', (next) => {
			expect(geor.toString).to.be.function();
			expect(geor.toString()).to.equal('Geor');
			expect(String(geor)).to.equal('Geor');
			expect(0 + geor).to.equal('0Geor');
			expect('code:' + geor).to.equal('code:Geor');

			next();
		});

		it('implements toJSON', (next) => {
			expect(geor.toJSON).to.be.function();
			expect(geor.toJSON()).to.equal('Geor');
			expect(JSON.stringify(geor)).to.equal('"Geor"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(geor.valueOf).to.be.function();
			expect(geor.valueOf()).to.equal(240);
			expect(Number(geor)).to.equal(240);
			expect(+geor).to.equal(240);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(geor.valueOf).to.be.function();
			expect(geor.valueOf()).to.equal(240);
			expect(Number(geor)).to.equal(240);
			expect(+geor).to.equal(240);

			expect(0 + geor).to.equal('0Geor');
			expect(String(geor)).to.equal('Geor');

			next();
		});
	});
});
