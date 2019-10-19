/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cyrl - Cyrillic', () => {
		const cyrl = factory('Cyrl');

		it('instances are singletons', (next) => {
			const singleton = factory('Cyrl');
			const upper = factory('CYRL');
			const lower = factory('cyrl');
			const code = factory.code('Cyrl');
			const numeric = factory.numeric('220');
			const number = factory.numeric(220);
			const instance = new ISO15924('Cyrl', '220');

			expect(singleton).to.shallow.equal(cyrl);
			expect(upper).to.shallow.equal(cyrl);
			expect(lower).to.shallow.equal(cyrl);
			expect(code).to.shallow.equal(cyrl);
			expect(numeric).to.shallow.equal(cyrl);
			expect(number).to.shallow.equal(cyrl);
			expect(instance).not.to.shallow.equal(cyrl);
			expect(instance.code).to.equal(cyrl.code);
			expect(instance.numeric).to.equal(cyrl.numeric);

			next();
		});

		it('has code "Cyrl"', (next) => {
			expect(cyrl.code).to.equal('Cyrl');

			next();
		});

		it('has numeric "220"', (next) => {
			expect(cyrl.numeric).to.equal('220');

			next();
		});

		it('implements toString', (next) => {
			expect(cyrl.toString).to.be.function();
			expect(cyrl.toString()).to.equal('Cyrl');
			expect(String(cyrl)).to.equal('Cyrl');
			expect(0 + cyrl).to.equal('0Cyrl');
			expect('code:' + cyrl).to.equal('code:Cyrl');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cyrl.toJSON).to.be.function();
			expect(cyrl.toJSON()).to.equal('Cyrl');
			expect(JSON.stringify(cyrl)).to.equal('"Cyrl"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cyrl.valueOf).to.be.function();
			expect(cyrl.valueOf()).to.equal(220);
			expect(Number(cyrl)).to.equal(220);
			expect(+cyrl).to.equal(220);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cyrl.valueOf).to.be.function();
			expect(cyrl.valueOf()).to.equal(220);
			expect(Number(cyrl)).to.equal(220);
			expect(+cyrl).to.equal(220);

			expect(0 + cyrl).to.equal('0Cyrl');
			expect(String(cyrl)).to.equal('Cyrl');

			next();
		});
	});
});
