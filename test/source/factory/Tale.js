/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tale - Tai Le', () => {
		const tale = factory('Tale');

		it('instances are singletons', (next) => {
			const singleton = factory('Tale');
			const upper = factory('TALE');
			const lower = factory('tale');
			const code = factory.code('Tale');
			const numeric = factory.numeric('353');
			const number = factory.numeric(353);
			const instance = new ISO15924('Tale', '353');

			expect(singleton).to.shallow.equal(tale);
			expect(upper).to.shallow.equal(tale);
			expect(lower).to.shallow.equal(tale);
			expect(code).to.shallow.equal(tale);
			expect(numeric).to.shallow.equal(tale);
			expect(number).to.shallow.equal(tale);
			expect(instance).not.to.shallow.equal(tale);
			expect(instance.code).to.equal(tale.code);
			expect(instance.numeric).to.equal(tale.numeric);

			next();
		});

		it('has code "Tale"', (next) => {
			expect(tale.code).to.equal('Tale');

			next();
		});

		it('has numeric "353"', (next) => {
			expect(tale.numeric).to.equal('353');

			next();
		});

		it('implements toString', (next) => {
			expect(tale.toString).to.be.function();
			expect(tale.toString()).to.equal('Tale');
			expect(String(tale)).to.equal('Tale');
			expect(0 + tale).to.equal('0Tale');
			expect('code:' + tale).to.equal('code:Tale');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tale.toJSON).to.be.function();
			expect(tale.toJSON()).to.equal('Tale');
			expect(JSON.stringify(tale)).to.equal('"Tale"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tale.valueOf).to.be.function();
			expect(tale.valueOf()).to.equal(353);
			expect(Number(tale)).to.equal(353);
			expect(+tale).to.equal(353);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tale.valueOf).to.be.function();
			expect(tale.valueOf()).to.equal(353);
			expect(Number(tale)).to.equal(353);
			expect(+tale).to.equal(353);

			expect(0 + tale).to.equal('0Tale');
			expect(String(tale)).to.equal('Tale');

			next();
		});
	});
});
