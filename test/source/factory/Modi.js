/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Modi - Modi, Moḍī', () => {
		const modi = factory('Modi');

		it('instances are singletons', (next) => {
			const singleton = factory('Modi');
			const upper = factory('MODI');
			const lower = factory('modi');
			const code = factory.code('Modi');
			const numeric = factory.numeric('324');
			const number = factory.numeric(324);
			const instance = new ISO15924('Modi', '324');

			expect(singleton).to.shallow.equal(modi);
			expect(upper).to.shallow.equal(modi);
			expect(lower).to.shallow.equal(modi);
			expect(code).to.shallow.equal(modi);
			expect(numeric).to.shallow.equal(modi);
			expect(number).to.shallow.equal(modi);
			expect(instance).not.to.shallow.equal(modi);
			expect(instance.code).to.equal(modi.code);
			expect(instance.numeric).to.equal(modi.numeric);

			next();
		});

		it('has code "Modi"', (next) => {
			expect(modi.code).to.equal('Modi');

			next();
		});

		it('has numeric "324"', (next) => {
			expect(modi.numeric).to.equal('324');

			next();
		});

		it('implements toString', (next) => {
			expect(modi.toString).to.be.function();
			expect(modi.toString()).to.equal('Modi');
			expect(String(modi)).to.equal('Modi');
			expect(0 + modi).to.equal('0Modi');
			expect('code:' + modi).to.equal('code:Modi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(modi.toJSON).to.be.function();
			expect(modi.toJSON()).to.equal('Modi');
			expect(JSON.stringify(modi)).to.equal('"Modi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(modi.valueOf).to.be.function();
			expect(modi.valueOf()).to.equal(324);
			expect(Number(modi)).to.equal(324);
			expect(+modi).to.equal(324);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(modi.valueOf).to.be.function();
			expect(modi.valueOf()).to.equal(324);
			expect(Number(modi)).to.equal(324);
			expect(+modi).to.equal(324);

			expect(0 + modi).to.equal('0Modi');
			expect(String(modi)).to.equal('Modi');

			next();
		});
	});
});
