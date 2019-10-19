/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Runr - Runic', () => {
		const runr = factory('Runr');

		it('instances are singletons', (next) => {
			const singleton = factory('Runr');
			const upper = factory('RUNR');
			const lower = factory('runr');
			const code = factory.code('Runr');
			const numeric = factory.numeric('211');
			const number = factory.numeric(211);
			const instance = new ISO15924('Runr', '211');

			expect(singleton).to.shallow.equal(runr);
			expect(upper).to.shallow.equal(runr);
			expect(lower).to.shallow.equal(runr);
			expect(code).to.shallow.equal(runr);
			expect(numeric).to.shallow.equal(runr);
			expect(number).to.shallow.equal(runr);
			expect(instance).not.to.shallow.equal(runr);
			expect(instance.code).to.equal(runr.code);
			expect(instance.numeric).to.equal(runr.numeric);

			next();
		});

		it('has code "Runr"', (next) => {
			expect(runr.code).to.equal('Runr');

			next();
		});

		it('has numeric "211"', (next) => {
			expect(runr.numeric).to.equal('211');

			next();
		});

		it('implements toString', (next) => {
			expect(runr.toString).to.be.function();
			expect(runr.toString()).to.equal('Runr');
			expect(String(runr)).to.equal('Runr');
			expect(0 + runr).to.equal('0Runr');
			expect('code:' + runr).to.equal('code:Runr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(runr.toJSON).to.be.function();
			expect(runr.toJSON()).to.equal('Runr');
			expect(JSON.stringify(runr)).to.equal('"Runr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(runr.valueOf).to.be.function();
			expect(runr.valueOf()).to.equal(211);
			expect(Number(runr)).to.equal(211);
			expect(+runr).to.equal(211);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(runr.valueOf).to.be.function();
			expect(runr.valueOf()).to.equal(211);
			expect(Number(runr)).to.equal(211);
			expect(+runr).to.equal(211);

			expect(0 + runr).to.equal('0Runr');
			expect(String(runr)).to.equal('Runr');

			next();
		});
	});
});
