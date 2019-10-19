/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Orkh - Old Turkic, Orkhon Runic', () => {
		const orkh = factory('Orkh');

		it('instances are singletons', (next) => {
			const singleton = factory('Orkh');
			const upper = factory('ORKH');
			const lower = factory('orkh');
			const code = factory.code('Orkh');
			const numeric = factory.numeric('175');
			const number = factory.numeric(175);
			const instance = new ISO15924('Orkh', '175');

			expect(singleton).to.shallow.equal(orkh);
			expect(upper).to.shallow.equal(orkh);
			expect(lower).to.shallow.equal(orkh);
			expect(code).to.shallow.equal(orkh);
			expect(numeric).to.shallow.equal(orkh);
			expect(number).to.shallow.equal(orkh);
			expect(instance).not.to.shallow.equal(orkh);
			expect(instance.code).to.equal(orkh.code);
			expect(instance.numeric).to.equal(orkh.numeric);

			next();
		});

		it('has code "Orkh"', (next) => {
			expect(orkh.code).to.equal('Orkh');

			next();
		});

		it('has numeric "175"', (next) => {
			expect(orkh.numeric).to.equal('175');

			next();
		});

		it('implements toString', (next) => {
			expect(orkh.toString).to.be.function();
			expect(orkh.toString()).to.equal('Orkh');
			expect(String(orkh)).to.equal('Orkh');
			expect(0 + orkh).to.equal('0Orkh');
			expect('code:' + orkh).to.equal('code:Orkh');

			next();
		});

		it('implements toJSON', (next) => {
			expect(orkh.toJSON).to.be.function();
			expect(orkh.toJSON()).to.equal('Orkh');
			expect(JSON.stringify(orkh)).to.equal('"Orkh"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(orkh.valueOf).to.be.function();
			expect(orkh.valueOf()).to.equal(175);
			expect(Number(orkh)).to.equal(175);
			expect(+orkh).to.equal(175);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(orkh.valueOf).to.be.function();
			expect(orkh.valueOf()).to.equal(175);
			expect(Number(orkh)).to.equal(175);
			expect(+orkh).to.equal(175);

			expect(0 + orkh).to.equal('0Orkh');
			expect(String(orkh)).to.equal('Orkh');

			next();
		});
	});
});
