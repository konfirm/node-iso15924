/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cyrs - Cyrillic (Old Church Slavonic variant)', () => {
		const cyrs = factory('Cyrs');

		it('instances are singletons', (next) => {
			const singleton = factory('Cyrs');
			const upper = factory('CYRS');
			const lower = factory('cyrs');
			const code = factory.code('Cyrs');
			const numeric = factory.numeric('221');
			const number = factory.numeric(221);
			const instance = new ISO15924('Cyrs', '221');

			expect(singleton).to.shallow.equal(cyrs);
			expect(upper).to.shallow.equal(cyrs);
			expect(lower).to.shallow.equal(cyrs);
			expect(code).to.shallow.equal(cyrs);
			expect(numeric).to.shallow.equal(cyrs);
			expect(number).to.shallow.equal(cyrs);
			expect(instance).not.to.shallow.equal(cyrs);
			expect(instance.code).to.equal(cyrs.code);
			expect(instance.numeric).to.equal(cyrs.numeric);

			next();
		});

		it('has code "Cyrs"', (next) => {
			expect(cyrs.code).to.equal('Cyrs');

			next();
		});

		it('has numeric "221"', (next) => {
			expect(cyrs.numeric).to.equal('221');

			next();
		});

		it('implements toString', (next) => {
			expect(cyrs.toString).to.be.function();
			expect(cyrs.toString()).to.equal('Cyrs');
			expect(String(cyrs)).to.equal('Cyrs');
			expect(0 + cyrs).to.equal('0Cyrs');
			expect('code:' + cyrs).to.equal('code:Cyrs');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cyrs.toJSON).to.be.function();
			expect(cyrs.toJSON()).to.equal('Cyrs');
			expect(JSON.stringify(cyrs)).to.equal('"Cyrs"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cyrs.valueOf).to.be.function();
			expect(cyrs.valueOf()).to.equal(221);
			expect(Number(cyrs)).to.equal(221);
			expect(+cyrs).to.equal(221);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cyrs.valueOf).to.be.function();
			expect(cyrs.valueOf()).to.equal(221);
			expect(Number(cyrs)).to.equal(221);
			expect(+cyrs).to.equal(221);

			expect(0 + cyrs).to.equal('0Cyrs');
			expect(String(cyrs)).to.equal('Cyrs');

			next();
		});
	});
});
