/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaao - Codes reserved for private use', () => {
		const qaao = factory('Qaao');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaao');
			const upper = factory('QAAO');
			const lower = factory('qaao');
			const code = factory.code('Qaao');
			const numeric = factory.numeric('914');
			const number = factory.numeric(914);
			const instance = new ISO15924('Qaao', '914');

			expect(singleton).to.shallow.equal(qaao);
			expect(upper).to.shallow.equal(qaao);
			expect(lower).to.shallow.equal(qaao);
			expect(code).to.shallow.equal(qaao);
			expect(numeric).to.shallow.equal(qaao);
			expect(number).to.shallow.equal(qaao);
			expect(instance).not.to.shallow.equal(qaao);
			expect(instance.code).to.equal(qaao.code);
			expect(instance.numeric).to.equal(qaao.numeric);

			next();
		});

		it('has code "Qaao"', (next) => {
			expect(qaao.code).to.equal('Qaao');

			next();
		});

		it('has numeric "914"', (next) => {
			expect(qaao.numeric).to.equal('914');

			next();
		});

		it('implements toString', (next) => {
			expect(qaao.toString).to.be.function();
			expect(qaao.toString()).to.equal('Qaao');
			expect(String(qaao)).to.equal('Qaao');
			expect(0 + qaao).to.equal('0Qaao');
			expect('code:' + qaao).to.equal('code:Qaao');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaao.toJSON).to.be.function();
			expect(qaao.toJSON()).to.equal('Qaao');
			expect(JSON.stringify(qaao)).to.equal('"Qaao"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaao.valueOf).to.be.function();
			expect(qaao.valueOf()).to.equal(914);
			expect(Number(qaao)).to.equal(914);
			expect(+qaao).to.equal(914);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaao.valueOf).to.be.function();
			expect(qaao.valueOf()).to.equal(914);
			expect(Number(qaao)).to.equal(914);
			expect(+qaao).to.equal(914);

			expect(0 + qaao).to.equal('0Qaao');
			expect(String(qaao)).to.equal('Qaao');

			next();
		});
	});
});
