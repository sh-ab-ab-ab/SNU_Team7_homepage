<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SNU FINTECH AI 10th - Team7</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }

        .header {
            background-color: #007BFF;
            color: #fff;
            padding: 20px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 2rem;
        }

        .header h2 {
            margin: 5px 0 0;
            font-size: 1.2rem;
        }

        .team-container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
        }

        .team-member {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            transition: transform 0.3s;
        }

        .team-member img {
            width: 150px;
            height: auto;
            border-radius: 10px;
        }

        .team-member-content {
            flex: 1;
            margin-left: 20px;
        }

        .team-member h3 {
            font-size: 1.5rem;
            margin: 0;
        }

        .team-member p {
            font-size: 1rem;
            color: #555;
        }

        .pagination {
            margin: 20px 0;
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .pagination a {
            text-decoration: none;
            color: #007BFF;
            border: 1px solid #007BFF;
            padding: 10px 15px;
            border-radius: 50%;
            transition: background-color 0.3s, color 0.3s;
        }

        .pagination a.active {
            background-color: #007BFF;
            color: #fff;
        }

        .pagination a:hover {
            background-color: #0056b3;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>SNU FINTECH AI 10th</h1>
        <h2>Team7</h2>
    </div>

    <div class="team-container">
        <div class="team-member">
            <img src="https://via.placeholder.com/150" alt="Amanda Fisher">
            <div class="team-member-content">
                <h3>Amanda Fisher</h3>
                <p>Team Leader</p>
            </div>
        </div>

        <div class="pagination">
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
        </div>
    </div>
</body>
</html>
