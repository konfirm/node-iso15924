/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabg - Codes reserved for private use', () => {
		const qabg = factory('Qabg');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabg');
			const upper = factory('QABG');
			const lower = factory('qabg');
			const code = factory.code('Qabg');
			const numeric = factory.numeric('932');
			const number = factory.numeric(932);
			const instance = new ISO15924('Qabg', '932');

			expect(singleton).to.shallow.equal(qabg);
			expect(upper).to.shallow.equal(qabg);
			expect(lower).to.shallow.equal(qabg);
			expect(code).to.shallow.equal(qabg);
			expect(numeric).to.shallow.equal(qabg);
			expect(number).to.shallow.equal(qabg);
			expect(instance).not.to.shallow.equal(qabg);
			expect(instance.code).to.equal(qabg.code);
			expect(instance.numeric).to.equal(qabg.numeric);

			next();
		});

		it('has code "Qabg"', (next) => {
			expect(qabg.code).to.equal('Qabg');

			next();
		});

		it('has numeric "932"', (next) => {
			expect(qabg.numeric).to.equal('932');

			next();
		});

		it('implements toString', (next) => {
			expect(qabg.toString).to.be.function();
			expect(qabg.toString()).to.equal('Qabg');
			expect(String(qabg)).to.equal('Qabg');
			expect(0 + qabg).to.equal('0Qabg');
			expect('code:' + qabg).to.equal('code:Qabg');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabg.toJSON).to.be.function();
			expect(qabg.toJSON()).to.equal('Qabg');
			expect(JSON.stringify(qabg)).to.equal('"Qabg"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabg.valueOf).to.be.function();
			expect(qabg.valueOf()).to.equal(932);
			expect(Number(qabg)).to.equal(932);
			expect(+qabg).to.equal(932);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabg.valueOf).to.be.function();
			expect(qabg.valueOf()).to.equal(932);
			expect(Number(qabg)).to.equal(932);
			expect(+qabg).to.equal(932);

			expect(0 + qabg).to.equal('0Qabg');
			expect(String(qabg)).to.equal('Qabg');

			next();
		});
	});
});
