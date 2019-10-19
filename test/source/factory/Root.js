/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Root - Reserved for the language-neutral base of the CLDR locale tree', () => {
		const root = factory('Root');

		it('instances are singletons', (next) => {
			const singleton = factory('Root');
			const upper = factory('ROOT');
			const lower = factory('root');
			const code = factory.code('Root');
			const instance = new ISO15924('Root');

			expect(singleton).to.shallow.equal(root);
			expect(upper).to.shallow.equal(root);
			expect(lower).to.shallow.equal(root);
			expect(code).to.shallow.equal(root);
			expect(instance).not.to.shallow.equal(root);
			expect(instance.code).to.equal(root.code);
			expect(instance.numeric).to.equal(root.numeric);

			next();
		});

		it('has code "Root"', (next) => {
			expect(root.code).to.equal('Root');

			next();
		});

		it('does not have numeric', (next) => {
			expect(root.numeric).to.be.undefined();

			next();
		});

		it('implements toString', (next) => {
			expect(root.toString).to.be.function();
			expect(root.toString()).to.equal('Root');
			expect(String(root)).to.equal('Root');
			expect(0 + root).to.equal('0Root');
			expect('code:' + root).to.equal('code:Root');

			next();
		});

		it('implements toJSON', (next) => {
			expect(root.toJSON).to.be.function();
			expect(root.toJSON()).to.equal('Root');
			expect(JSON.stringify(root)).to.equal('"Root"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(root.valueOf).to.be.function();
			expect(root.valueOf()).to.equal(0);
			expect(Number(root)).to.equal(0);
			expect(+root).to.equal(0);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(root.valueOf).to.be.function();
			expect(root.valueOf()).to.equal(0);
			expect(Number(root)).to.equal(0);
			expect(+root).to.equal(0);

			expect(0 + root).to.equal('0Root');
			expect(String(root)).to.equal('Root');

			next();
		});
	});
});
