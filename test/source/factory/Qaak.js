/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaak - Codes reserved for private use', () => {
		const qaak = factory('Qaak');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaak');
			const upper = factory('QAAK');
			const lower = factory('qaak');
			const code = factory.code('Qaak');
			const numeric = factory.numeric('910');
			const number = factory.numeric(910);
			const instance = new ISO15924('Qaak', '910');

			expect(singleton).to.shallow.equal(qaak);
			expect(upper).to.shallow.equal(qaak);
			expect(lower).to.shallow.equal(qaak);
			expect(code).to.shallow.equal(qaak);
			expect(numeric).to.shallow.equal(qaak);
			expect(number).to.shallow.equal(qaak);
			expect(instance).not.to.shallow.equal(qaak);
			expect(instance.code).to.equal(qaak.code);
			expect(instance.numeric).to.equal(qaak.numeric);

			next();
		});

		it('has code "Qaak"', (next) => {
			expect(qaak.code).to.equal('Qaak');

			next();
		});

		it('has numeric "910"', (next) => {
			expect(qaak.numeric).to.equal('910');

			next();
		});

		it('implements toString', (next) => {
			expect(qaak.toString).to.be.function();
			expect(qaak.toString()).to.equal('Qaak');
			expect(String(qaak)).to.equal('Qaak');
			expect(0 + qaak).to.equal('0Qaak');
			expect('code:' + qaak).to.equal('code:Qaak');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaak.toJSON).to.be.function();
			expect(qaak.toJSON()).to.equal('Qaak');
			expect(JSON.stringify(qaak)).to.equal('"Qaak"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaak.valueOf).to.be.function();
			expect(qaak.valueOf()).to.equal(910);
			expect(Number(qaak)).to.equal(910);
			expect(+qaak).to.equal(910);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaak.valueOf).to.be.function();
			expect(qaak.valueOf()).to.equal(910);
			expect(Number(qaak)).to.equal(910);
			expect(+qaak).to.equal(910);

			expect(0 + qaak).to.equal('0Qaak');
			expect(String(qaak)).to.equal('Qaak');

			next();
		});
	});
});
