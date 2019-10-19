/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Khoj - Khojki', () => {
		const khoj = factory('Khoj');

		it('instances are singletons', (next) => {
			const singleton = factory('Khoj');
			const upper = factory('KHOJ');
			const lower = factory('khoj');
			const code = factory.code('Khoj');
			const numeric = factory.numeric('322');
			const number = factory.numeric(322);
			const instance = new ISO15924('Khoj', '322');

			expect(singleton).to.shallow.equal(khoj);
			expect(upper).to.shallow.equal(khoj);
			expect(lower).to.shallow.equal(khoj);
			expect(code).to.shallow.equal(khoj);
			expect(numeric).to.shallow.equal(khoj);
			expect(number).to.shallow.equal(khoj);
			expect(instance).not.to.shallow.equal(khoj);
			expect(instance.code).to.equal(khoj.code);
			expect(instance.numeric).to.equal(khoj.numeric);

			next();
		});

		it('has code "Khoj"', (next) => {
			expect(khoj.code).to.equal('Khoj');

			next();
		});

		it('has numeric "322"', (next) => {
			expect(khoj.numeric).to.equal('322');

			next();
		});

		it('implements toString', (next) => {
			expect(khoj.toString).to.be.function();
			expect(khoj.toString()).to.equal('Khoj');
			expect(String(khoj)).to.equal('Khoj');
			expect(0 + khoj).to.equal('0Khoj');
			expect('code:' + khoj).to.equal('code:Khoj');

			next();
		});

		it('implements toJSON', (next) => {
			expect(khoj.toJSON).to.be.function();
			expect(khoj.toJSON()).to.equal('Khoj');
			expect(JSON.stringify(khoj)).to.equal('"Khoj"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(khoj.valueOf).to.be.function();
			expect(khoj.valueOf()).to.equal(322);
			expect(Number(khoj)).to.equal(322);
			expect(+khoj).to.equal(322);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(khoj.valueOf).to.be.function();
			expect(khoj.valueOf()).to.equal(322);
			expect(Number(khoj)).to.equal(322);
			expect(+khoj).to.equal(322);

			expect(0 + khoj).to.equal('0Khoj');
			expect(String(khoj)).to.equal('Khoj');

			next();
		});
	});
});
