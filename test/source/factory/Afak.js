/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Afak - Afaka', () => {
		const afak = factory('Afak');

		it('instances are singletons', (next) => {
			const singleton = factory('Afak');
			const upper = factory('AFAK');
			const lower = factory('afak');
			const code = factory.code('Afak');
			const numeric = factory.numeric('439');
			const number = factory.numeric(439);
			const instance = new ISO15924('Afak', '439');

			expect(singleton).to.shallow.equal(afak);
			expect(upper).to.shallow.equal(afak);
			expect(lower).to.shallow.equal(afak);
			expect(code).to.shallow.equal(afak);
			expect(numeric).to.shallow.equal(afak);
			expect(number).to.shallow.equal(afak);
			expect(instance).not.to.shallow.equal(afak);
			expect(instance.code).to.equal(afak.code);
			expect(instance.numeric).to.equal(afak.numeric);

			next();
		});

		it('has code "Afak"', (next) => {
			expect(afak.code).to.equal('Afak');

			next();
		});

		it('has numeric "439"', (next) => {
			expect(afak.numeric).to.equal('439');

			next();
		});

		it('implements toString', (next) => {
			expect(afak.toString).to.be.function();
			expect(afak.toString()).to.equal('Afak');
			expect(String(afak)).to.equal('Afak');
			expect(0 + afak).to.equal('0Afak');
			expect('code:' + afak).to.equal('code:Afak');

			next();
		});

		it('implements toJSON', (next) => {
			expect(afak.toJSON).to.be.function();
			expect(afak.toJSON()).to.equal('Afak');
			expect(JSON.stringify(afak)).to.equal('"Afak"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(afak.valueOf).to.be.function();
			expect(afak.valueOf()).to.equal(439);
			expect(Number(afak)).to.equal(439);
			expect(+afak).to.equal(439);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(afak.valueOf).to.be.function();
			expect(afak.valueOf()).to.equal(439);
			expect(Number(afak)).to.equal(439);
			expect(+afak).to.equal(439);

			expect(0 + afak).to.equal('0Afak');
			expect(String(afak)).to.equal('Afak');

			next();
		});
	});
});
