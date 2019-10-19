/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zmth - Mathematical notation', () => {
		const zmth = factory('Zmth');

		it('instances are singletons', (next) => {
			const singleton = factory('Zmth');
			const upper = factory('ZMTH');
			const lower = factory('zmth');
			const code = factory.code('Zmth');
			const numeric = factory.numeric('995');
			const number = factory.numeric(995);
			const instance = new ISO15924('Zmth', '995');

			expect(singleton).to.shallow.equal(zmth);
			expect(upper).to.shallow.equal(zmth);
			expect(lower).to.shallow.equal(zmth);
			expect(code).to.shallow.equal(zmth);
			expect(numeric).to.shallow.equal(zmth);
			expect(number).to.shallow.equal(zmth);
			expect(instance).not.to.shallow.equal(zmth);
			expect(instance.code).to.equal(zmth.code);
			expect(instance.numeric).to.equal(zmth.numeric);

			next();
		});

		it('has code "Zmth"', (next) => {
			expect(zmth.code).to.equal('Zmth');

			next();
		});

		it('has numeric "995"', (next) => {
			expect(zmth.numeric).to.equal('995');

			next();
		});

		it('implements toString', (next) => {
			expect(zmth.toString).to.be.function();
			expect(zmth.toString()).to.equal('Zmth');
			expect(String(zmth)).to.equal('Zmth');
			expect(0 + zmth).to.equal('0Zmth');
			expect('code:' + zmth).to.equal('code:Zmth');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zmth.toJSON).to.be.function();
			expect(zmth.toJSON()).to.equal('Zmth');
			expect(JSON.stringify(zmth)).to.equal('"Zmth"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zmth.valueOf).to.be.function();
			expect(zmth.valueOf()).to.equal(995);
			expect(Number(zmth)).to.equal(995);
			expect(+zmth).to.equal(995);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zmth.valueOf).to.be.function();
			expect(zmth.valueOf()).to.equal(995);
			expect(Number(zmth)).to.equal(995);
			expect(+zmth).to.equal(995);

			expect(0 + zmth).to.equal('0Zmth');
			expect(String(zmth)).to.equal('Zmth');

			next();
		});
	});
});
