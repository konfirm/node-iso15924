/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Moon - Moon (Moon code, Moon script, Moon type)', () => {
		const moon = factory('Moon');

		it('instances are singletons', (next) => {
			const singleton = factory('Moon');
			const upper = factory('MOON');
			const lower = factory('moon');
			const code = factory.code('Moon');
			const numeric = factory.numeric('218');
			const number = factory.numeric(218);
			const instance = new ISO15924('Moon', '218');

			expect(singleton).to.shallow.equal(moon);
			expect(upper).to.shallow.equal(moon);
			expect(lower).to.shallow.equal(moon);
			expect(code).to.shallow.equal(moon);
			expect(numeric).to.shallow.equal(moon);
			expect(number).to.shallow.equal(moon);
			expect(instance).not.to.shallow.equal(moon);
			expect(instance.code).to.equal(moon.code);
			expect(instance.numeric).to.equal(moon.numeric);

			next();
		});

		it('has code "Moon"', (next) => {
			expect(moon.code).to.equal('Moon');

			next();
		});

		it('has numeric "218"', (next) => {
			expect(moon.numeric).to.equal('218');

			next();
		});

		it('implements toString', (next) => {
			expect(moon.toString).to.be.function();
			expect(moon.toString()).to.equal('Moon');
			expect(String(moon)).to.equal('Moon');
			expect(0 + moon).to.equal('0Moon');
			expect('code:' + moon).to.equal('code:Moon');

			next();
		});

		it('implements toJSON', (next) => {
			expect(moon.toJSON).to.be.function();
			expect(moon.toJSON()).to.equal('Moon');
			expect(JSON.stringify(moon)).to.equal('"Moon"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(moon.valueOf).to.be.function();
			expect(moon.valueOf()).to.equal(218);
			expect(Number(moon)).to.equal(218);
			expect(+moon).to.equal(218);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(moon.valueOf).to.be.function();
			expect(moon.valueOf()).to.equal(218);
			expect(Number(moon)).to.equal(218);
			expect(+moon).to.equal(218);

			expect(0 + moon).to.equal('0Moon');
			expect(String(moon)).to.equal('Moon');

			next();
		});
	});
});
