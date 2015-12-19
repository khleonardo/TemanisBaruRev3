/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create : function(req, res, next){
		var obj = {
			username : req.param('username'),
			password : req.param('password')
		}
		User.create(obj, function(err, user){
			if (err) return(next(err));
			return res.redirect('/tingkat');
		})
	}

	pilihTingkat : function(req, res, next){
		var obj = {
			tingkatan : req.param('tingkatan')
		}
		User.create(obj, function(err, user){
			if (err) return(next(err));
			return res.redirect('/tingkat/profil')
		})
	}
	
};

