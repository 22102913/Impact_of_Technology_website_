using MongoDB.Bson;
using MongoDB.Driver;

namespace ServerSide.MongoDB
{
	public static class Cluster0
	{
		public static void Connect()
		{
			const string connectionUri = "mongodb+srv://220993:WUPW9upw7XQ4pxYx@cluster0.hgf2zap.mongodb.net/?retryWrites=true&w=majority";
			var settings = MongoClientSettings.FromConnectionString(connectionUri);
			// Set the ServerApi field of the settings object to Stable API version 1
			settings.ServerApi = new ServerApi(ServerApiVersion.V1);
			// Create a new client and connect to the server
			var client = new MongoClient(settings);
			// Send a ping to confirm a successful connection
			try
			{
				var result = client.GetDatabase("admin").RunCommand<BsonDocument>(new BsonDocument("ping", 1));
				Console.WriteLine("Pinged your deployment. You successfully connected to MongoDB!");
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex);
			}
		}




	}
}
