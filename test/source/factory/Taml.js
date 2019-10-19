/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Taml - Tamil', () => {
		const taml = factory('Taml');

		it('instances are singletons', (next) => {
			const singleton = factory('Taml');
			const upper = factory('TAML');
			const lower = factory('taml');
			const code = factory.code('Taml');
			const numeric = factory.numeric('346');
			const number = factory.numeric(346);
			const instance = new ISO15924('Taml', '346');

			expect(singleton).to.shallow.equal(taml);
			expect(upper).to.shallow.equal(taml);
			expect(lower).to.shallow.equal(taml);
			expect(code).to.shallow.equal(taml);
			expect(numeric).to.shallow.equal(taml);
			expect(number).to.shallow.equal(taml);
			expect(instance).not.to.shallow.equal(taml);
			expect(instance.code).to.equal(taml.code);
			expect(instance.numeric).to.equal(taml.numeric);

			next();
		});

		it('has code "Taml"', (next) => {
			expect(taml.code).to.equal('Taml');

			next();
		});

		it('has numeric "346"', (next) => {
			expect(taml.numeric).to.equal('346');

			next();
		});

		it('implements toString', (next) => {
			expect(taml.toString).to.be.function();
			expect(taml.toString()).to.equal('Taml');
			expect(String(taml)).to.equal('Taml');
			expect(0 + taml).to.equal('0Taml');
			expect('code:' + taml).to.equal('code:Taml');

			next();
		});

		it('implements toJSON', (next) => {
			expect(taml.toJSON).to.be.function();
			expect(taml.toJSON()).to.equal('Taml');
			expect(JSON.stringify(taml)).to.equal('"Taml"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(taml.valueOf).to.be.function();
			expect(taml.valueOf()).to.equal(346);
			expect(Number(taml)).to.equal(346);
			expect(+taml).to.equal(346);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(taml.valueOf).to.be.function();
			expect(taml.valueOf()).to.equal(346);
			expect(Number(taml)).to.equal(346);
			expect(+taml).to.equal(346);

			expect(0 + taml).to.equal('0Taml');
			expect(String(taml)).to.equal('Taml');

			next();
		});
	});
});
