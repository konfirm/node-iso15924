/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Maya - Mayan hieroglyphs', () => {
		const maya = factory('Maya');

		it('instances are singletons', (next) => {
			const singleton = factory('Maya');
			const upper = factory('MAYA');
			const lower = factory('maya');
			const code = factory.code('Maya');
			const numeric = factory.numeric('090');
			const number = factory.numeric(90);
			const instance = new ISO15924('Maya', '090');

			expect(singleton).to.shallow.equal(maya);
			expect(upper).to.shallow.equal(maya);
			expect(lower).to.shallow.equal(maya);
			expect(code).to.shallow.equal(maya);
			expect(numeric).to.shallow.equal(maya);
			expect(number).to.shallow.equal(maya);
			expect(instance).not.to.shallow.equal(maya);
			expect(instance.code).to.equal(maya.code);
			expect(instance.numeric).to.equal(maya.numeric);

			next();
		});

		it('has code "Maya"', (next) => {
			expect(maya.code).to.equal('Maya');

			next();
		});

		it('has numeric "090"', (next) => {
			expect(maya.numeric).to.equal('090');

			next();
		});

		it('implements toString', (next) => {
			expect(maya.toString).to.be.function();
			expect(maya.toString()).to.equal('Maya');
			expect(String(maya)).to.equal('Maya');
			expect(0 + maya).to.equal('0Maya');
			expect('code:' + maya).to.equal('code:Maya');

			next();
		});

		it('implements toJSON', (next) => {
			expect(maya.toJSON).to.be.function();
			expect(maya.toJSON()).to.equal('Maya');
			expect(JSON.stringify(maya)).to.equal('"Maya"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(maya.valueOf).to.be.function();
			expect(maya.valueOf()).to.equal(90);
			expect(Number(maya)).to.equal(90);
			expect(+maya).to.equal(90);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(maya.valueOf).to.be.function();
			expect(maya.valueOf()).to.equal(90);
			expect(Number(maya)).to.equal(90);
			expect(+maya).to.equal(90);

			expect(0 + maya).to.equal('0Maya');
			expect(String(maya)).to.equal('Maya');

			next();
		});
	});
});
