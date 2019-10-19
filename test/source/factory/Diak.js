/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Diak - Dives Akuru', () => {
		const diak = factory('Diak');

		it('instances are singletons', (next) => {
			const singleton = factory('Diak');
			const upper = factory('DIAK');
			const lower = factory('diak');
			const code = factory.code('Diak');
			const numeric = factory.numeric('342');
			const number = factory.numeric(342);
			const instance = new ISO15924('Diak', '342');

			expect(singleton).to.shallow.equal(diak);
			expect(upper).to.shallow.equal(diak);
			expect(lower).to.shallow.equal(diak);
			expect(code).to.shallow.equal(diak);
			expect(numeric).to.shallow.equal(diak);
			expect(number).to.shallow.equal(diak);
			expect(instance).not.to.shallow.equal(diak);
			expect(instance.code).to.equal(diak.code);
			expect(instance.numeric).to.equal(diak.numeric);

			next();
		});

		it('has code "Diak"', (next) => {
			expect(diak.code).to.equal('Diak');

			next();
		});

		it('has numeric "342"', (next) => {
			expect(diak.numeric).to.equal('342');

			next();
		});

		it('implements toString', (next) => {
			expect(diak.toString).to.be.function();
			expect(diak.toString()).to.equal('Diak');
			expect(String(diak)).to.equal('Diak');
			expect(0 + diak).to.equal('0Diak');
			expect('code:' + diak).to.equal('code:Diak');

			next();
		});

		it('implements toJSON', (next) => {
			expect(diak.toJSON).to.be.function();
			expect(diak.toJSON()).to.equal('Diak');
			expect(JSON.stringify(diak)).to.equal('"Diak"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(diak.valueOf).to.be.function();
			expect(diak.valueOf()).to.equal(342);
			expect(Number(diak)).to.equal(342);
			expect(+diak).to.equal(342);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(diak.valueOf).to.be.function();
			expect(diak.valueOf()).to.equal(342);
			expect(Number(diak)).to.equal(342);
			expect(+diak).to.equal(342);

			expect(0 + diak).to.equal('0Diak');
			expect(String(diak)).to.equal('Diak');

			next();
		});
	});
});
